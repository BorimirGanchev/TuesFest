import React, { useContext ,useEffect} from "react";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/chat-context-firebase";
import UserDocuments from "./UserDocuments";
import { authDoctorFromMongo } from "../doc-auth/auth-doc";
import { AuthContext } from "../context/auth-context-firebase-trash";
const Chat = () => {
  const { data } = useContext(ChatContext);
  const [isDoc,setDoc] = React.useState(false)
  const {currentUser} = useContext(AuthContext)
  useEffect(() => {
    async function auth (){
      const doc = await authDoctorFromMongo("http://localhost:5000/api/docs",currentUser.displayName);
      console.log("--------doc")
    console.log(doc)
    if(doc.data.length > 0){
      setDoc(true);
    }
    }
    auth();
  })
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          {isDoc && <UserDocuments name = {data.user?.displayName}/>}
        </div>
      </div>
      <Messages />
      <Input magic = {data.user?.displayName}/>
    </div>
  );
};

export default Chat;