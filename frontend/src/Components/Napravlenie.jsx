import React from "react";

export default function Napravlenie(props){
    return (
        <div className="napravlenie-container">
            <p>Type : {props.type}</p>
            <p>Name : {props.name}</p>
            <p>Age : {props.age}</p>
            <p>Sex : {props.gender}</p>
            <p>Date of birth : {props.birth}</p>
            <p>EGN : {props.egn}</p>
            <p>Address : {props.address}</p>
            <p>Diagnosis : {props.diagnosis}</p>
            <p>Treatment : {props.lechenie}</p>
            <p>Doctor : {props.doctor}</p>
        </div>
    )
}