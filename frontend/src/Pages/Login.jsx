import React,{ useState } from "react";
import "../Styles/Register.css"
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config/firebase-config";
function Login() {
        const [err, setErr] = useState(false);
        const navigate = useNavigate();
        const handle_submit = async (e) => {
            e.preventDefault();
            console.log("Test");
            const email = e.target[0].value;
            const password = e.target[1].value;
              console.log(email);
            try {
              await signInWithEmailAndPassword(auth, email, password);
              navigate("/")
            } catch (err) {
              setErr(true);
              console.log(err)
            }
          }
    return (
        <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">Doc Chat</span>
            <span className="title">Log in</span>
            <form onSubmit={handle_submit}>
            <input required type="email" placeholder="email" />
            <input required type="password" placeholder="password" />
            <button type="submit">Sign in</button>
            </form>
            <p>
            {err && <span>Something went wrong</span>}
            You don't have an account? <Link to="/register">Register 1</Link>
            </p>
        </div>
        </div>
    );
}
export default Login;