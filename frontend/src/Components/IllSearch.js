import React from "react";
import "../Styles/IllSearch.css";

const IllSearch = () =>{
    return(
        <div className="input">
            <input type="text" placeholder="I have..." />
            <div className="send">
                <button>Send</button>
            </div>
        </div>
    )
}

export default IllSearch