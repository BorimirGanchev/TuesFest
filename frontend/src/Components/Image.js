import React from "react";

const Image = () => {
    const handleClick = () => {
        const screenHeight = window.innerHeight;
        console.log(screenHeight)
        console.log("screeeeeeeen")
        window.scrollTo({top: screenHeight*2, behavior: 'smooth'});

    };
    return(
        <div className="Image">
            <img className="image" src="/Pictures/doctor.jpg" alt="Doctor"></img>
            <div className="mainTextContainer">
                <h2 className="bigText">Consult your doctor and find treatment</h2>
                <p className="smallText">This site is aimed at people who want to consult their personal doctors, or want to find treatment for a given disease</p>
            </div>
            <div className="arrow">
                <button className="arrowButton" onClick={handleClick}>
                    <i class="fa-solid fa-angle-down"></i>
                </button>
            </div>
        </div>
    );
};

export default Image;
