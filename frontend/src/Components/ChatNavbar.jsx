import React,{useContext} from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase-config/firebase-config'
import { AuthContext } from '../context/auth-context-firebase-trash'
const ChatNavbar = () => {
  const {currentUser} = useContext(AuthContext)
    return (
      <div className='navbar'>
        <span className="logo">Doc Chat</span>
        <div className="user">
          <img src={currentUser.photoURL} alt="img" />
          <span>{currentUser.displayName}</span>
          <button onClick={() => signOut(auth)}>logout</button>
        </div>
      </div>
    )
  }
  
  export default ChatNavbar