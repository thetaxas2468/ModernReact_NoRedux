import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import searchImages from "./api";
import { useState } from "react";


function App(){
    const [images,setImages]=useState([]);


    const handleSubmit = async (search)=>{
        const results = await searchImages(search);
        setImages(results);
    }

    return(
        <div>
            <SearchBar onSubmit={handleSubmit} />
            <ImageList imgs={images}/>
        </div>
    );

}

export default App;