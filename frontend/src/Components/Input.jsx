import React, { useContext, useState,useEffect } from "react";
import Img from "../Pictures2/img.png";
import Attach from "../Pictures2/attach.png";
import { AuthContext } from "../context/auth-context-firebase-trash";
import { ChatContext } from "../context/chat-context-firebase";
import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../firebase-config/firebase-config";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import "./NavbarStyle.css";
import { authDoctorFromMongo } from "../doc-auth/auth-doc";
import AddDocument from "./AttachFile";
const Input = (props) => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);
  const [isDoc,setDoc] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  async function attachFileToCurrentPatient(){

  }
  useEffect(() => {
    console.dir(data)
    async function fetchData() {
      try {
        const docAuth = await authDoctorFromMongo("http://localhost:5000/api/docs",currentUser.displayName);
        if (docAuth.data.length > 0) {
          setDoc(true);
        }
      } catch (err) {
        console.log(err);
      }
    }
    fetchData()
  },)
  const handleSend = async () => {
    if (img) {
      const storageRef = ref(storage, uuid());

      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on(
        (error) => {
          //TODO:Handle Error
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                img: downloadURL,
              }),
            });
          });
        }
      );
    } else {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        }),
      });
    }

    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    setText("");
    setImg(null);
  };
  return (
    <div className="input"> 
    {/* <AddDocument className = "addDoc" style = {{}} name = {props.magic}/> */}
      <input
        type="text"
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
        value={text}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSend();
          }
        }}
      />
      <div className="send">
        <img src={Attach} alt="" />
        <input
          type="file"
          style={{ display: "none" }}
          id="file"
          onChange={(e) => setImg(e.target.files[0])}
        />
        <label htmlFor="file">
          <img src={Img} alt="" />
        </label>
        <button onClick={handleSend} className = "send-message">Send</button>
       
      </div>
    </div>
  );
};

export default Input;