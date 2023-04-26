import {useEffect,useContext} from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import BooksContext from "./context/Books";


function App() {
  const {fetchBooks}=useContext(BooksContext);

  useEffect(()=>{
    fetchBooks();
    //ESlint warning will be fixed but be aware of the infinite loop of request that will happend
    //because of new memory location of fetchBooks and because of setBooks in fetchbooks function
    //but we fixed it using useCallBack hook that is created by react same as useState hook,useEffect hook
    //useContext hook and we can use custom hook to do that.




    //Clean up functions are functions that are returned by useEffect and we will get this diagram
    // 1-  first render:
    // useEffect arrow function executed 
    // returned cleanUp
    // 2- second render
    // clean up returned function from previous will run first
    // useEffect arrow function executed
    // new cleanUp function returned
    //  and so on
    // The main idea about cleanup functions is to clean something is being done by useeffect and we dont want it to affect
    // the coming calls in the next state changes like if we want to add event listner to our document.body with out cleanup
    // then each time we will have one more event listenr added to document.body if 55 state changes happend  then we will be having
    // different 55 event listener to the document.body so in this situation we return cleanUp function that removes the previous eventlister
    // to keep having only one eventlister with the new values(that is because clean up run first in the second render and so on).
  },[fetchBooks])


  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList/>
      <BookCreate/>
    </div>
  );
}

export default App;
