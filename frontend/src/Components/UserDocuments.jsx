import React,{useState, useContext} from "react";
import axios from "axios";
import "../Styles/userDocuments.css"
import "../Styles/showDocumentsNavbar.css"
import { ChatContext } from "../context/chat-context-firebase";
import AddDocument from "./AttachFile";


export default function UserDocuments(props){
    const [isDivVisible, setIsDivVisible] = useState(false);

    const handleButtonClick = () => {
      setIsDivVisible(!isDivVisible);
      console.log("hellllo");
    };

    const divStyle = {
        display: isDivVisible ? 'none' : 'flex',
      };
    
    const {data} = useContext(ChatContext)
    const [show,setShow] = useState({
        display:"none",
    })
    const [UserDocuments,setUserDocuments] = useState();
    const getUserDocuments = async() => {
            try{
                let userDocuments = await axios.get("http://localhost:5000/api/users",{
                    params:{
                        name:props.name
                    }
                });
                console.log(userDocuments.data[0].documents)
                console.log("---------user");
                if(userDocuments != undefined){
                    var documents =userDocuments.data[0].documents.map((doc) => {
                    return <div>{doc.name ? doc.name : doc.Name} <button onClick={handleButtonClick}><i class="fa-solid fa-angle-down"></i></button> </div>
                })
            }
                await setUserDocuments(documents);
                console.log(UserDocuments);
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
   
    return (
        <div className="user-documents-container">
            <Navbar>
                <NavItems>
                    <DropdownMenu/>
                </NavItems>
            </Navbar>
            <div className="documents" style = {show}>
                <h1 className="yourDocumentsTitle">Your Documents</h1>
                <button className="close-user-docs" onClick={closeDocs}><i class="fa-sharp fa-solid fa-circle-xmark"></i></button>
                <div className="documentsContainer">
                    <div className="eachDocument">{UserDocuments}</div>
                    <div className="moreDataContainer" style={divStyle}> 
                        <h1>Hello</h1>
                    </div>
                </div>
            </div>
        </div>
    )

    function DropdownMenu() {

        function DropdownItems(props){
            return(
                <div className="menu-item">
                    {props.children}
                </div>
            )
        }
    
        return(
            <div className="dropdown">
                <DropdownItems><button className="showDocument" onClick = {getUserDocuments}>Show Documents</button></DropdownItems>
                <DropdownItems><button className="showDocument">Create Documents</button></DropdownItems>
            </div>
        )
      }

    function Navbar (props) {
        return(
            <nav className="navbar">
                <ul className="navbar-nav"> { props.children }</ul>
            </nav>
        )
    }

    function NavItems (props) {
        const[open,setOpen] = useState(false);
    
        return(
            <li className="nav-item">
                <div className="icon-button" onClick={() =>setOpen(!open)}>
                    <i class="fa-solid fa-ellipsis"></i>
                </div>
                {open && props.children}
            </li>
        )
      }
}