import "./HomeStyles.css";
import Image from "./Image";
import { useContext } from "react";
import Navbar from "./Navbar";
import { AuthContext } from "../context/auth-context-firebase-trash";
function Home() {
  const { currentUser } = useContext(AuthContext);
  return (
    <>
      <div className="home">
        <div className="mainDiv">
          <div className="navbarComp">
            <Navbar />
          </div>
          <div className="imageComp">
            <Image />
          </div>
          <div className="aboutUs">
            <div className="aboutUsText">
              <h3 className="aboutUsTitle">About Us</h3>
              <p className="aboutUsParagraf">Doc Chat is a web application that allows faster and safer communication with doctors. Also, our platform provides an algorithm that can give hypothetical diseases based on symptoms</p>
            </div>
            <div className="benefits">
              <div className="benefitsHeader">
                <div className="icons">
                  <i class="fa-regular fa-address-card"></i>
                  <h3 style={{fontSize:"30px"}}>Why us</h3>
                </div>
                <div className="icons">
                  <i class="fa-solid fa-laptop-medical"></i>
                  <h3 style={{fontSize:"30px"}}>Our site</h3>
                </div>
                <div className="icons">
                  <i class="fa-solid fa-gears"></i>
                  <h3 style={{fontSize:"30px"}}>What we offer</h3>
                </div>
              </div>
              <div className="benefitsParagraph">
                <div className="paragraph">
                  <p className="aboutUsBenefits1Paragraf">Instead of the patient queuing up at the hospitals, through our app he will be able to contact his GP. Many of the hospital sites do not provide such direct contact with their staff.</p>
                </div>
                <div className="paragraph">
                  <p className="aboutUsBenefits2Paragraf">Our site is user friendly, accessible on all types of devices and with a few clicks you can get what you want.</p>
                </div>
                <div className="paragraph">
                  <p className="aboutUsBenefits3Paragraf">We provide fast, safe and instant connection to doctors, specialists and consultants.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
