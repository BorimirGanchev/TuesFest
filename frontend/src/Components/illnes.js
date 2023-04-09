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
        <img src={props.snimka} alt="img" className="illImage" />
      </div>
      <div className="illnessDecription">
        <h3>Description</h3>
        <p>{props.description}</p>
      </div>
      <div className="illnessTreatment">
        <h3>Treatment</h3>
        <p>{props.lechenie}</p>
      </div>
    </div>
  );
}

export default Illnes;
