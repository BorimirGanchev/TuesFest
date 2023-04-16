import React, { useEffect, useState } from "react";
import { AuthContext } from "../context/auth-context-firebase-trash";
import { useContext } from "react";

function Illnes(props) {
  const { currentUser } = useContext(AuthContext);
  const getColor = () =>{
    if(props.matchPercentage < 40){
      return "#ff0000";
    }else if (props.matchPercentage < 70){
      return "#ffa500";
    }else{
      return "#2ecc71";
    }
  }
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
      <div className="illnessSpecialist">
        <h3>Specialist: <span>{props.specialist}</span></h3>
      </div>
      <div className="percentageContainer">
        <h3 className="PercantageTitle">Chances of having this illness:</h3>
        <div className="progress-bar">
          <div className="progress-bar-fill" style={{ width : `${props.matchPercentage}%`, backgroundColor: getColor()}}>
            <div className="progress-lable">{props.matchPercentage}%</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Illnes;
