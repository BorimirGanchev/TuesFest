import React from "react";
import Cam from "../Pictures2/cam.png";
import Add from "../Pictures2/add.png";
import More from "../Pictures2/more.png";
import Messages from "./Messages";
import Input from "./Input"

const Chat = () =>{
    return (
        <div className="chat">
          <div className="chatInfo">
            <span>Jane</span>
            <div className="chatIcons">
              <img src={Cam} alt="" />
              <img src={Add} alt="" />
              <img src={More} alt="" />
            </div>
          </div>
          <Messages/>
          <Input/>
        </div>
      );
}

export default Chat