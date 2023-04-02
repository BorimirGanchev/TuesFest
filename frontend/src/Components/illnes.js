import React from "react";
import "../Styles/illness.css";
import { AuthContext } from "../context/auth-context-firebase-trash";
import { useContext } from "react";

function Illnes(props) {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="illnesContainer">
      <div className="illnessName">
        <p>{props.name}</p>
      </div>
      <div className="illnessImage">
        <img src={currentUser.photoURL} alt="img" className="illImage" />
      </div>
      <div className="illnessDecription">
        <p>{props.description}</p>
      </div>
      <div className="illnessTreatment">
        <p>{props.lechenie}</p>
      </div>
    </div>
  );
}

export default Illnes;
