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
    await axios
      .get("http://localhost:5000/api/illness", {
        params: {
          symptoms: symptoms,
        },
      })
      .then(function (response) {
        console.log(response.data.illnesses[0]);
        set_bolesti_data(response.data.illnesses);
      })
      .catch((err) => {
        console.log(err);
      });
    const bolesti_arr = bolesti_data.map((bolest) => {
      return (
        <Illnes
          snimka={bolest.snimka}
          name={bolest.description}
          description={bolest.symptoms}
          lechenie={bolest.lechenie}
        />
      );
    });
    set_bolesti_cards(bolesti_arr);
  }
  function handleChange(event) {
    updateSymptoms(event.target.value);
    console.log(symptoms);
  }
  return (
    <div className="illHome">
      <div className="input2">
        <Navbar />
        <Illtext />
        <div className="componentsBox">
          <input type="text" placeholder="I have..." onChange={handleChange} />
          <div className="send">
            <button onClick={handleSearch}>Search</button>
          </div>
          <div className="bolesti-container">{bolesti_cards}</div>
        </div>
      </div>
    </div>
  );
};

export default IllSearch;
