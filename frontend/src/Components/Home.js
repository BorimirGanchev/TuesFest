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
              <div className="benefitsContent">
                <div className="benefitsContentHeader">
                  <i class="fa-regular fa-address-card"></i>
                  <h3 style={{fontSize:"30px"}}>Why us</h3>
                  <p className="aboutUsBenefitsParagraf">iesdudsuf pi w8uewuu eiu wfehhisdsfd  aweefwsfwswfsf waFWSDF FWEDF  GESRERE sefgseg gfw</p>
                </div>
              </div>
              <div className="benefitsContent">
                <div className="benefitsContentHeader">
                  <i class="fa-solid fa-laptop-medical"></i>
                  <h3 style={{fontSize:"30px"}}>Our site</h3>
                  <p className="aboutUsBenefitsParagraf">iesdudsuf pi w8uewuu eiu wfehhisdsfd  aweefwsfwswfsf waFWSDF FWEDF  GESRERE sefgseg gfw</p>
                </div>
              </div>
              <div className="benefitsContent">
                <div className="benefitsContentHeader">
                  <i class="fa-solid fa-gears"></i>
                  <h3 style={{fontSize:"30px"}}>What we offer</h3>
                  <p className="aboutUsBenefitsParagraf">iesdudsuf pi w8uewuu eiu wfehhisdsfd  aweefwsfwswfsf waFWSDF FWEDF  GESRERE sefgseg gfw</p>
                </div>
              </div>
            </div>
            <div className="ourServices">
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
