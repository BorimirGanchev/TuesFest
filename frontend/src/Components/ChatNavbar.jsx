import React from 'react'

const ChatNavbar = () => {
    return (
      <div className='navbar'>
        <span className="logo">Doc Chat</span>
        <div className="user">
          <img src="/Pictures/home.png" alt="img" />
          <span>John</span>
          <button>logout</button>
        </div>
      </div>
    )
  }
  
  export default ChatNavbar