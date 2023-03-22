import React from "react";
import "../Styles/Register.css"

const Login = () => {
    return (
        <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">Doc Chat</span>
            <span className="title">Log in</span>
            <form>
            <input required type="email" placeholder="email" />
            <input required type="password" placeholder="password" />
            <input required style={{ display: "none" }} type="file" id="file" />
            <button>Sign in</button>
            </form>
            <p>
            You don't have an account? Register
            </p>
        </div>
        </div>
    );
};

export default Login;