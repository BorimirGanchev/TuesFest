import React from "react";
import "../Styles/IllSearch.css";

const IllSearch = () =>{
    return(
        <div className="input2">
            <div className="text">
                <h2>By entering symptoms, the search engine will show you probable diseases.</h2>
            </div>
            <input type="text" placeholder="I have..." />
            <div className="send">
                <button>Search</button>
            </div>
        </div>
    )
}

export default IllSearch