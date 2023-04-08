import React from "react";

export default function Belezhka(props){
    return (
        <div className="belezhka-container">
            <p>Type : {props.type}</p>
            <p>Name : {props.name}</p>
            <p>Age : {props.age}</p>
            <p>Address : {props.address}</p>
            <p>Diagnosis : {props.diagnosis}</p>
        </div>
    )
}