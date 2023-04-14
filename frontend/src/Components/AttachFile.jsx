import React from "react";
import axios from "axios";
import "../Styles/AttachFile.css"
import { ChatContext } from "../context/chat-context-firebase";
export default function AddDocument(props) {
  const [formData, setFormData] = React.useState({
    Name: "",
    type: "",
    city: ""
  });
  async function handleSubmit() {
    console.log("--------------");
    let documentToBeSend =
      formData.type === "belezhka"
        ? {
            Name: formData.Name,
            Age: formData.Age,
            Address: formData.Address,
            Diagnosis: formData.Diagnosis,
            Lechenie: formData.Lechenie,
            Type:formData.type,
            EGN:formData.EGN
          }
        : {};
    console.log(documentToBeSend);
    try{
      await axios
      .post("http://localhost:5000/api/user", {
        name: props.name,
        document: documentToBeSend
      })}catch(err){console.log(err)}
  }
  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      };
    });
    console.log(formData);
  }
  return (
    <div className="documentsHolder">
      <fieldset>
        <legend>TYPE</legend>
        <input
          type="radio"
          id="medical note"
          name="type"
          value="belezhka"
          checked={formData.type === "belezhka"}
          onChange={handleChange}
        />
        <label htmlFor="belezhka">Мedical note</label>
        <br />

        <input
          type="radio"
          id="napravlenie"
          name="type"
          value="napravlenie"
          checked={formData.type === "napravlenie"}
          onChange={handleChange}
        />
        <label htmlFor="napravlenie">Direction</label>
        <br />
      </fieldset>
      {formData.type === "belezhka" ? (
        <>
          <button className="submitDocument" onClick={handleSubmit}>Submit</button>
          <input
            type="text"
            placeholder="Name"
            onChange={handleChange}
            name="Name"
            value={formData.Name}
          />
          <input
            type="text"
            placeholder="Age"
            onChange={handleChange}
            name="Age"
            value={formData.Age}
          />
          <input
            type="text"
            placeholder="Address"
            onChange={handleChange}
            name="Address"
            value={formData.Address}
          />
          <input
          type="text"
          placeholder="EGN"
          onChange={handleChange}
          name="EGN"
          value={formData.EGN}
          />
          <input
            type="text"
            placeholder="Diagnosis"
            onChange={handleChange}
            name="Diagnosis"
            value={formData.Diagnosis}
          />
          <input
            type="text"
            placeholder="Lechenie"
            onChange={handleChange}
            name="Lechenie"
            value={formData.Lechenie}
          />
          <input
            type="text"
            placeholder="Doctor"
            onChange={handleChange}
            name="Doctor"
            value={formData.Doctor}
          />
        </>
      ) : ""}  
      
    </div>
  );
}
