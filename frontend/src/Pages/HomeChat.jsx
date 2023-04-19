import React from 'react'
import "../Styles/Register.css";
import Sidebar from '../Components/Sidebar'
import Chat from '../Components/Chat'
import Navbar from '../Components/Navbar';
function HomeChat(){
  return (
    <div className='home'>
      <div className="container">
        <Navbar/>
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  )
}

export default HomeChat