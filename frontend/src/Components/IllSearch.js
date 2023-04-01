import React from "react";
import "../Styles/IllSearch.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
import Illnes from "./illnes";
const IllSearch = () => {
  const [symptoms, updateSymptoms] = React.useState("");
  function handleSearch() {
    axios.get("/api/search/illness", {});
  }
  function handleChange(event) {
    updateSymptoms(event.target.value);
    console.log(symptoms);
  }
  return (
    <div className="input2">
      <Navbar />
      <div className="text">
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
      <Illnes/>
    </div>
  );
};

export default IllSearch;
