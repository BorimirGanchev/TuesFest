import React from "react";
import "../Styles/illness.css"
import { AuthContext } from '../context/auth-context-firebase-trash'
import { useContext } from "react";

const Illnes = () =>{
    const {currentUser} = useContext(AuthContext)
    return(
        <div className="illnesContainer">
            <div className="illnessName">
                <p>Influenza</p>
            </div>
            <div className="illnessImage">
                <img src={currentUser.photoURL} alt="img" className="illImage"/>
            </div>
            <div className="illnessDecription">
                <p>Decription: The influenza is highly contagious and spreads easily from person to person through droplets produced when an infected person talks, coughs, or sneezes. The symptoms of the flu can vary from mild to severe and can include fever, chills, cough, sore throat, runny or stuffy nose, muscle or body aches, headaches, fatigue, and sometimes vomiting and diarrhea.</p>
            </div>
            <div className="illnessTreatment">
                <p>Treatment: Antiviral medications work by blocking the replication of the influenza virus, but they must be taken within the first 48 hours of symptom onset to be effective. These medications include oseltamivir (Tamiflu), zanamivir (Relenza), and peramivir (Rapivab), and they are available by prescription only.</p>
            </div>
        </div>
    )
}

export default Illnes