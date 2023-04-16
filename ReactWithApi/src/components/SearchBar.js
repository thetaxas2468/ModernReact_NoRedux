import { useState } from "react";
import "../css/SearchBar.css";

function SearchBar({onSubmit}){
    const [input,setInput]=useState("");

    const handleSubmit =(e)=>{
        e.preventDefault();
        onSubmit(input);
    }

    return(
        <div>
            <form onSubmit={handleSubmit} id="searchBar">
                <input type="text" placeholder="Search What Image You Want" value={input} style={{padding:"0.5em"}} onChange={(e)=>{setInput(e.target.value)}}></input>
                <button className="clickBtn">Search</button>
            </form>
        </div>
    );

}

export default SearchBar;