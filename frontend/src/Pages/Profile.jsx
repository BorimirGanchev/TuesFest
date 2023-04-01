import React from "react";
import "../Styles/profile.css"
import { AuthContext } from '../context/auth-context-firebase-trash'
import { useContext } from "react";
const Profile = () => {
    const {currentUser} = useContext(AuthContext)
        return(
            <div className="page">
                <div className="box">
                    <div className="titleName">
                        <span>Doc Chat Profile</span>
                    </div>
                    <div className="profilePicture">
                        <img src={currentUser.photoURL} alt="img"/>
                    </div>
                    <div className="data">
                        <div className="name">
                            <span>Name: {currentUser.displayName}</span>
                        </div>
                        <div className="email">
                            <span>Email: {currentUser.email}</span>
                        </div>
                        <div className="status">
                            <span>Status: </span>
                        </div>
                    </div>
                </div>
            </div>
        )        
    }

export default Profile