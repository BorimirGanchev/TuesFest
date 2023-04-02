import React from "react";
import "../Styles/IllSearch.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
import Illnes from "./illnes";
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
    <div className="input2">
      <Navbar />
      <div className="text" style={{ marginTop: "30vh" }}>
        <h2>
          By entering symptoms, the search engine will show you probable
          diseases.
          <h6>
            Please note that this is not active diagnosis and you should ask you
            GP before taking any action.
          </h6>
        </h2>
      </div>
      <input type="text" placeholder="I have..." onChange={handleChange} />
      <div className="send">
        <button onClick={handleSearch}>Search</button>
        <button>
          <Link to={`/chats?symptoms=${symptoms}`}>send to your doctor</Link>
        </button>
      </div>
      <div className="bolesti-container">{bolesti_cards}</div>
    </div>
  );
};

export default IllSearch;
