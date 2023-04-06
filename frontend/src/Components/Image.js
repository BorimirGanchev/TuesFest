import React from "react";
import Text from "./Text";

const Image = () => {
    return(
        <div className="Image">
            <img className="image" src="/Pictures/doctor.jpg" alt="Doctor"></img>
            <div className="mainText">
                <h2 className="bigText">Consult your doctor and find treatment</h2>
                <p className="smallText">Тhis site is aimed at people who want to consult their personal doctors, or want to find treatment for a given disease</p>
            </div>
            <div className="buttons">
                <button class="transparent-button">Click me!</button>
                <button class="notransparent-button">Click me!</button>
            </div>
            <div className="arrow">
                <a href="/" style={{color: "white"}}>
                    <i class="fa-solid fa-angle-down"></i>
                </a>
            </div>
        </div>
    )
}

export default Image