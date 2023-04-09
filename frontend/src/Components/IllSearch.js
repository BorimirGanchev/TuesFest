import React from "react";
import "../Styles/IllSearch.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
import Illnes from "./illnes";
import Illtext from "./Illtext";
const IllSearch = () => {
  const [bolesti_data, set_bolesti_data] = React.useState();
  const [symptoms, updateSymptoms] = React.useState("");
  const [bolesti_cards, set_bolesti_cards] = React.useState();
  async function handleSearch() {
    try {
      const axios_res = await axios.get("http://localhost:5000/api/illness", {
        params: {
          symptoms: symptoms,
        },
      });
      set_bolesti_data(axios_res.data.illnesses);
      var bolesti_arr = bolesti_data
        ? bolesti_data.map((bolest) => {
            return (
              <Illnes
                snimka={bolest.snimka}
                name={bolest.description}
                description={bolest.text}
                lechenie={bolest.lechenie}
              />
            );
          })
        : "click again";
      set_bolesti_cards(bolesti_arr);
    } catch (err) {
      console.log(err);
    }
  }

  function handleChange(event) {
    updateSymptoms(event.target.value);
    console.log(symptoms);
  }
  return (
    <div className="illHome">
      <div className="input2">
        <div className="navbarComponent">
          <Navbar />
        </div>
        <div className="backgroundImageContainer">
          <img
            className="illSearchImage"
            src="/Pictures/doctor2.jpg"
            alt="Doctor"
          ></img>
          <Illtext />
          <div className="componentsBox">
            <label>
              <input
                type="text"
                placeholder="I have..."
                onChange={handleChange}
              />
              <button className="send" onClick={handleSearch}>
                Search
              </button>
            </label>
          </div>
        </div>
        <div className="illBackgroudContainer">
          <h1>Illnesses</h1>
          <div className="bolesti-container">{bolesti_cards}</div>
        </div>
      </div>
    </div>
  );
};

export default IllSearch;
