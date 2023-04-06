import React from "react";

const Image = () => {
    const handleClick = () =>{
        window.scrollTo(0, 870);
      }
    return(
        <div className="Image">
            <img className="image" src="/Pictures/doctor.jpg" alt="Doctor"></img>
            <div className="mainTextContainer">
                <h2 className="bigText">Consult your doctor and find treatment</h2>
                <p className="smallText">Тhis site is aimed at people who want to consult their personal doctors, or want to find treatment for a given disease</p>
            </div>
            <div className="arrow">
                <button className="arrowButton" onClick={handleClick}>
                    <i class="fa-solid fa-angle-down"></i>
                </button>
            </div>
        </div>
    )
}

export default Image