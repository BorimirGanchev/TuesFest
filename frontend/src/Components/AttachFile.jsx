import React, { useRef } from "react";
import axios from "axios";
import "../Styles/AttachFile.css"
import { ChatContext } from "../context/chat-context-firebase";
export default function AddDocument(props) {

  const [formData, setFormData] = React.useState({
    Name: "",
    type: "",
    city: ""
  });
  const [showDocumentAdded, setShowDocumentAdded] = React.useState(false);

  async function handleSubmit() {
    let documentToBeSend =
      formData.type === "belezhka"
        ? {
            Name: formData.Name,
            Age: formData.Age,
            Address: formData.Address,
            Diagnosis: formData.Diagnosis,
            Lechenie: formData.Lechenie,
            Type:formData.type,
            EGN:formData.EGN,
            Doctor: formData.Doctor
          }
        : {};
    console.log(documentToBeSend);
    try{
      const axios_res = await axios
      .post("http://localhost:5000/api/user", {
        name: props.name,
        document: documentToBeSend
      })
      console.log("add document response")
      console.log(axios_res)
      setShowDocumentAdded(true);
      setTimeout(() => {
        setShowDocumentAdded(false);
      }, 3000);
      setFormData({ // clear form data after submitting
        Name: "",
        type: "",
        city: ""
      });
    }catch(err){
      console.log(err)
    }
  }

  async function handleSubmitDirection () {
    let documentToBeSend =
      formData.type === "napravlenie"
        ? {
            Name: formData.Name,
            Age: formData.Age,
            Address: formData.Address,
            Birth: formData.Date,
            Diagnosis: formData.Diagnosis,
            Lechenie: formData.Lechenie,
            Type:formData.type,
            EGN:formData.EGN,
            Doctor: formData.Doctor
          }
        : {};
    console.log(documentToBeSend);
    try{
      const axios_res = await axios
      .post("http://localhost:5000/api/user", {
        name: props.name,
        document: documentToBeSend
      })
      console.log("add document response")
      console.log(axios_res)
      setShowDocumentAdded(true);
      setTimeout(() => {
        setShowDocumentAdded(false);
      }, 3000);
      setFormData({ // clear form data after submitting
        Name: "",
        type: "",
        city: ""
      });
    }catch(err){
      console.log(err)
    }
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
      
      <div className={showDocumentAdded ? "showIfDocumendIsMade" : "hideIfDocumentIsNotMade"}>
        <span>Document added successfully!</span>
      </div>

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
            className="allInputs"
            type="text"
            placeholder="Name"
            onChange={handleChange}
            name="Name"
            value={formData.Name}
          />
          <input
            className="allInputs"
            type="text"
            placeholder="Age"
            onChange={handleChange}
            name="Age"
            value={formData.Age}
          />
          <input
            className="allInputs"
            type="text"
            placeholder="Address"
            onChange={handleChange}
            name="Address"
            value={formData.Address}
          />
          <input
          className="allInputs"
          type="text"
          placeholder="EGN"
          onChange={handleChange}
          name="EGN"
          value={formData.EGN}
          />
          <input
            className="allInputs"
            type="text"
            placeholder="Diagnosis"
            onChange={handleChange}
            name="Diagnosis"
            value={formData.Diagnosis}
          />
          <input
            className="allInputs"
            type="text"
            placeholder="Treatment"
            onChange={handleChange}
            name="Lechenie"
            value={formData.Lechenie}
          />
          <input
            className="allInputs"
            type="text"
            placeholder="Doctor"
            onChange={handleChange}
            name="Doctor"
            value={formData.Doctor}
          />
        </>
      ) : ""} 

        {formData.type === "napravlenie" ? (
        <>
          <button className="submitDocument" onClick={handleSubmitDirection}>Submit</button>

          <input
            className="allInputs"
            type="text"
            placeholder="Name"
            onChange={handleChange}
            name="Name"
            value={formData.Name}
          />
          <input
            className="allInputs"
            type="text"
            placeholder="Age"
            onChange={handleChange}
            name="Age"
            value={formData.Age}
          />
          <input
            className="allInputs"
            type="date"
            onChange={handleChange}
            name="Date"
            value={formData.Date}
          />
          <input
            className="allInputs"
            type="text"
            placeholder="Address"
            onChange={handleChange}
            name="Address"
            value={formData.Address}
          />
          <input
          className="allInputs"
          type="text"
          placeholder="EGN"
          onChange={handleChange}
          name="EGN"
          value={formData.EGN}
          />
          <input
            className="allInputs"
            type="text"
            placeholder="Diagnosis"
            onChange={handleChange}
            name="Diagnosis"
            value={formData.Diagnosis}
          />
          <input
            className="allInputs"
            type="text"
            placeholder="Treatment"
            onChange={handleChange}
            name="Lechenie"
            value={formData.Lechenie}
          />
          <input
            className="allInputs"
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
