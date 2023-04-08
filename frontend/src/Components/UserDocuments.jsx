import React,{useState, useContext} from "react";
import axios from "axios";
import "../Styles/userDocuments.css"
import "../Styles/showDocumentsNavbar.css"
import { ChatContext } from "../context/chat-context-firebase";
import AddDocument from "./AttachFile";


export default function UserDocuments(props){
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
                    return <div>{doc.name ? doc.name : doc.Name} </div>
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
            <div className="douments" style = {show}>
                <button className="close-user-docs" onClick={closeDocs}>X</button>
                {UserDocuments}
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
                <DropdownItems><button onClick = {getUserDocuments}>Show Documents</button></DropdownItems>
                <DropdownItems><button onClick={ShowCreateDocument}>Create Documents</button></DropdownItems>
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