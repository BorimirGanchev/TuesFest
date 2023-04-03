import React, { useEffect } from "react";
import "../Styles/profile.css"
import { AuthContext } from '../context/auth-context-firebase-trash'
import { useContext } from "react";

const Profile = () => {
    const {currentUser} = useContext(AuthContext)
    const isDocStatic = true
    const doctorDescriptionStatic = "I graduated from the Medical University in Sofia, Bulgaria. I have 2 years of experience at Pirogov Hospital."
    
        console.log(currentUser.photoURL);
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
                            <span>Status: {isDocStatic?"Doctor":"Patient"}</span>
                        </div>
                        {isDocStatic &&
                            <div className="description">
                            <span>Description: {doctorDescriptionStatic}</span>
                        </div>}
                    </div>
                </div>
            </div>
        )        
    }

export default Profile