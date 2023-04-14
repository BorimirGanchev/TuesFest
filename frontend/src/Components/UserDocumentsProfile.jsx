import React,{useState, useContext,useEffect} from "react";
import axios from "axios";
import "../Styles/UserDocumentsProfile.css"
import { ChatContext } from "../context/chat-context-firebase";
import Belezhka from "./MedicinskaBelezhka";
import AddDocument from "./AttachFile";


export default function UserDocuments(props){
    const [isDivVisible, setIsDivVisible] = useState(false);
    const [dataForSelectedDocument, setDataForSelectedDocument] = useState()
    const {data} = useContext(ChatContext)
    const [show,setShow] = useState({
        display:"none",
    })
    const [UserDocuments,setUserDocuments] = useState();
    const [shouldShowForm,setForm] = useState(false)
    const handleButtonClick = async(doc) => {
      setIsDivVisible(true);
      setDataForSelectedDocument(doc)
      console.log("dataForSelectedElement");
      console.dir(dataForSelectedDocument);
      console.log("dataaaaa")
      console.dir(doc)
    };

    const divStyle = {
        display: isDivVisible ? 'flex' : 'none',
      };
    
    function handleShowForm(){
        setForm(!shouldShowForm)
    }
    const getUserDocuments = async() => {
            try{
                let userDocuments = await axios.get("http://localhost:5000/api/users",{
                    params:{
                        name:props.name
                    }
                });
                console.log(userDocuments.data[0].documents)
                if(userDocuments !== undefined){
                    var documents = userDocuments.data[0].documents.map((doc,index) => {
                    return <div key={index}>{doc.name ? doc.name : doc.Name} <button onClick={()=>handleButtonClick(doc)}><i class="fa-solid fa-angle-down"></i></button></div>
                })
            }
                await setUserDocuments(documents);
                setShow({
                    display:"block",
                })
            }catch(e){
                console.log(e);
            }
        }
        function closeDocs(){
            setShow({
                display:"none",
            })
        }
   
        useEffect(() => {
            console.log("dataForSelectedElement-useEffect");
            console.dir(dataForSelectedDocument);
            console.log("--------")
          }, [dataForSelectedDocument]);
    return (
        <div className="user-documents-container2">
            <button className="showDocument2" onClick = {getUserDocuments}>Show Documents</button>
            <div className="documents2" style = {show}>
                <h1 className="yourDocumentsTitle2">{props.displayName} documents</h1>
                <button className="close-user-docs2" onClick={closeDocs}><i class="fa-sharp fa-solid fa-circle-xmark"></i></button>
                <div className="documentsContainer2">
                    <div className="eachDocument2">{UserDocuments}</div>
                    <div className="moreDataContainer2" style={divStyle}> 
                        {dataForSelectedDocument ? (dataForSelectedDocument.Type === "belezhka" ? <Belezhka type = {dataForSelectedDocument.Type} name = {dataForSelectedDocument.Name} age = {dataForSelectedDocument.Age} address = {dataForSelectedDocument.Address} diagnosis = {dataForSelectedDocument.Diagnosis}/> : "") : ""}
                    </div>
                </div>
            </div>
        </div>
    )
}