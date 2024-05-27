import React from 'react'
import logo from '../img/logo.png'
import google from '../img/google.png'
import facebook from '../img/facebooklight.png'
import { NavLink } from 'react-router-dom'
import "../styles/login.css"
function LoginPage() {
  return (
    <main className='login'>
      <div className="login__header">
        <img src={logo} alt="" />
      </div>
      <div className="login__wrapper">
        <div className="login__nav">
          <NavLink to="/signup">Create acccount</NavLink>
          <NavLink to="/login">Log in</NavLink>
        </div>
        <div className="login__cta">
          <a href="#!"><img src={google} alt="" />Google Sign in</a>
          <a href="#!"><img src={facebook} alt="" />Facebook Sign in</a>
        </div>
        <div className="login__form">
         
          <h5>Email</h5>
          <input type="text" />
          <h5>Password</h5>
          <input type="text" />
          <button>send</button>
        </div>
      </div>
    </main>
  )
}

export default LoginPage
