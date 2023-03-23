import React from "react";

const Message = () =>{
    return(
        <div className="message owner">
            <div className="messageInfo">
                <img src="/Pictures/home.png"/>
                <span>just now</span>
            </div>
            <div className="messageContent">
                <p>hello</p>
                <img src="/Pictures/home.png"/>
            </div>
        </div>
    )
}

export default Message