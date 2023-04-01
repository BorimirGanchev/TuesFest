import React,{useState} from "react";
import axios from "axios";
import "../Styles/Register.css"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import Add from "../Pictures2/addAvatar.png"
import { auth, db, storage } from "../firebase-config/firebase-config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
const Register = () => {
    const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  function authDoctor (url,name){//returns a promise whether a doc wuth this name has been found or not
    return axios.get(url,
      {
        params:{name: name,}
      }).then((response) => {
      console.log(response);
      console.log("succesful auth");
    }).catch(error =>{
      console.log(error);
    });
  }

//
//axios
//

  const handle_submit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    const check = e.target[4].value;
    console.log(check)
    let isDoc = (check === "on") ? true : false; 
    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);
      await authDoctor("http://localhost:5000/api/docs",displayName)
      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
              isDoc,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
              isDoc : isDoc,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch (err) {
            console.log(err);
            setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      setErr(true);
      setLoading(false);
      console.log(err)
    }
  };


    return (
        <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">Doc Chat</span>
            <span className="title">Register</span>
            <form onSubmit = {handle_submit}>
            <input required type="text" placeholder="display name" />
            <input required type="email" placeholder="email" />
            <input required type="password" placeholder="password" />
            <input required style={{ display: "none" }} type="file" id="file" />
            <label htmlFor="file">
                <img src={Add} alt="" />
                <span>Add an avatar</span>
            </label>
            <input type="checkbox" placeholder = "i am a doctor"/>
            {err && <span>error in creating user</span>}
            <button>Sign up</button>
            </form>
            <p>
            You do have an account? <Link to="/login">Login</Link>
            </p>
        </div>
        </div>
    );
};

export default Register;