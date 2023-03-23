import React from "react";

const Search = () =>{
    return(
        <div className="search">
            <div className="searchForm">
                <input type="text" placeholder="find a user"/>
            </div>
            <div className="userChat">
                <img src="/Pictures/home.png"></img>
                <div className="userChatInfo">
                    <span>Jane</span>
                </div>
            </div>
        </div>
    )
}

export default Search