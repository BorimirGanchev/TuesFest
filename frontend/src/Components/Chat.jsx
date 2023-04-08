import React, { useContext } from "react";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/chat-context-firebase";
import UserDocuments from "./UserDocuments";
const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <UserDocuments name = {data.user?.displayName}/>
        </div>
      </div>
      <Messages />
      <Input magic = {data.user?.displayName}/>
    </div>
  );
};

export default Chat;