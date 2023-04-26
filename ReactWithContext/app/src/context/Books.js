import {createContext,useState,useCallback} from "react";
import axios from "axios";



const BooksContext = createContext();

function Provider({children}){
    const [books, setBooks] = useState([]);

  const fetchBooksFromBefore = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  }

  // this will keep the reference to fetchBooks value of the first render, because each of them functions
  // will be having same value but different location at the memory.
  const fetchBooks = useCallback(fetchBooksFromBefore,[]);

  const editBookById = async (id, newTitle) => {
    const response=await axios.put("http://localhost:3001/books/" + id,{
      title:newTitle
    })
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });

    setBooks(updatedBooks);
  };

  const deleteBookById = async (id) => {
    const response = await axios.delete("http://localhost:3001/books/"+id);
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books",{
      title
    })
    const updatedBooks = [
      ...books,
      response.data
    ];
    setBooks(updatedBooks);
  };




    return <BooksContext.Provider value={{
        books,
        createBook,
        deleteBookById,
        fetchBooks,
        editBookById
    }}>
        {children}
    </BooksContext.Provider>
}


export {Provider};
export default BooksContext;