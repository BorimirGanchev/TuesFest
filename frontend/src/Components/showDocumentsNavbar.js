import React ,{useState} from "react";
import "../Styles/showDocumentsNavbar.css"

function showDocumentsNavbar () {
    return (
        <Navbar>
            <NavItems>
                <DropdownMenu/>
            </NavItems>
        </Navbar>
    );
  }
  
  function DropdownMenu() {

    function DropdownItems(props){
        return(
            <a href="#" className="menu-item">
                {props.children}
            </a>
        )
    }

    return(
        <div className="dropdown">
            <DropdownItems>Show Documents</DropdownItems>
            <DropdownItems>Create Documents</DropdownItems>
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
            <a href="#" className="icon-button" onClick={() =>setOpen(!open)}>
                <i class="fa-solid fa-ellipsis"></i>
            </a>

            {open && props.children}
        </li>
    )
  }

  export default showDocumentsNavbar;