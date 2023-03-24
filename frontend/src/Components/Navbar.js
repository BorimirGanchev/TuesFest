import { Component } from "react";
import { MenuData } from "./MenuData";
import "./NavbarStyle.css";
import {Link} from "react-router-dom"


class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="logo">DocHelp</h1>
        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            <li>
                <a className="nav-links">
                    <i className="fa-solid fa-house-user"></i>
                    <Link to="/" style={{textDecoration:"none", color:"white"}}>Home</Link>
                </a>
            </li>
            <li>
                <a className="nav-links">
                    <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
                    Serach
                </a>
            </li>
            <li>
                <a className="nav-links">
                    <i className="fa-solid fa-comments"></i>
                    <Link to="chat" style={{textDecoration:"none", color:"white"}}>Chat</Link>
                </a>
            </li>
            <li>
                <a className="nav-links">
                    <i className="fa-solid fa-circle-info"></i>
                    Info
                </a>
            </li>
            <li>
                <a className="nav-links-mobile">
                    <Link to="/register" style={{textDecoration:"none", color:"black"}}>Sign up</Link>
                </a>
            </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
