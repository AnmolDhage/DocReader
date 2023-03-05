import React, { useContext, useState } from 'react'
import "./login.css"
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Context/authContext'

const Login = () => {
  let { loginUser } = useContext(AuthContext)



  return (

    <div className='container'>
      <div className='box'>
        <div className='login-title'>DocReader Login</div>

        <div className='credential'>
          <form className='login-from' onSubmit={loginUser}>
            <input className='username' name="username" placeholder='Email Id' type="text"  />
            <input className='password' name="password" placeholder='Password' type="text" />
            <input type='submit' className='login-page-login-btn' />
          </form>
        </div>
        <div className='register'>Don't have an account? <span className='register-btn'>Register</span></div>
        {/* <div>{email} {password}</div> */}
      </div>

    </div>
  )
}

export default Login