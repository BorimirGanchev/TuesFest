import React from "react";
import "../Styles/Register.css"
import Add from "../Pictures2/addAvatar.png"
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">Doc Chat</span>
            <span className="title">Register</span>
            <form>
            <input required type="text" placeholder="display name" />
            <input required type="email" placeholder="email" />
            <input required type="password" placeholder="password" />
            <input required style={{ display: "none" }} type="file" id="file" />
            <label htmlFor="file">
                <img src={Add} alt="" />
                <span>Add an avatar</span>
            </label>
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