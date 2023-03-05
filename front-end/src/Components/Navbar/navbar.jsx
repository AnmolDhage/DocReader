import React, { useContext } from 'react'
import "./navbar.css"
import {useNavigate} from "react-router-dom"
import { FaStethoscope } from "react-icons/fa";
import { AuthContext } from '../../Context/authContext';


const Navbar = () => {

  let {user,logoutUser}=useContext(AuthContext)

  const navigate = useNavigate();

  return (
    <div className="navbar">
        <div className='logo' onClick={()=>navigate("/")}>DocReader <span className='brand-logo'>{<FaStethoscope/>}</span></div>
        
        <button className='login-btn' onClick={()=> user? logoutUser() : navigate("/login") }>{user? <>Logout {user}</>:<>Login</>}</button>
    </div>
  )
}

export default Navbar