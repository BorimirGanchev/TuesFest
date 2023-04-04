import React, { useEffect } from "react";
import "../Styles/profile.css"
import { AuthContext } from '../context/auth-context-firebase-trash'
import { useContext } from "react";
import axios from "axios";
const Profile = () => {
    const [isDoc,validateDoc] = React.useState(false)
    const doctorDescriptionStatic = "I graduated from the Medical University in Sofia, Bulgaria. I have 2 years of experience at Pirogov Hospital."
    const {currentUser} = useContext(AuthContext)
    async function findDoc(){
        try{
            let doc = await axios.get('http://localhost:5000/api/docs',{
            params:{name: currentUser.displayName,}
        }
        )
        if(doc.data.length > 0){
            validateDoc(true)
        }
        
    }catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        console.log(currentUser.isDoc);
        findDoc()
    })
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
                    </div>
                    <div className="footer">
                        <div className="email">
                            <span>Email: {currentUser.email}</span>
                        </div>
                        <div className="status">
                            <span>Status: {isDoc?"Doctor":"Patient"}</span>
                        </div>
                        {isDoc &&
                            <div className="description">
                            <span>Description: {doctorDescriptionStatic}</span>
                        </div>}
                    </div>
                </div>
            </div>
        )        
    }

export default Profile