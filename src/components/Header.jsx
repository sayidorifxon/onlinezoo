import React, { useRef } from 'react'
import "../styles/header.css"
import logo from '../img/logo.png'
import lupa from '../img/lupa.png'
import { NavLink, useLocation } from 'react-router-dom'
import { FaBars } from "react-icons/fa6";

function Header() {
  let location = useLocation()
  let modal = useRef()
  function openModal(){
    modal.current.classList.toggle("db")
  } 
  return (
    <header className={location.pathname === "/signup" ? 'no_header' : "header" && location.pathname === "/login" ? 'no_header'  : "header" && location.pathname === "/contact" ? 'no_header' : "header" && location.pathname === "/donate" ? 'no_header' : "header" && location.pathname === "/feedback" ? 'no_header' : "header" }>
      <div className="container">
        <div ref={modal} className="modal">
          <nav>
            <ul>
              <li><NavLink className="navlink" to="/about">about</NavLink></li>
              <li><NavLink className="navlink" to="/map">MAP</NavLink></li>
              <li><NavLink className="navlink" to="/zoo">Zoos</NavLink></li>
              <li><NavLink className="navlink" to="/contact">contact us</NavLink></li>
              <li><NavLink className="navlink" to="/design">design</NavLink></li>
              <li><NavLink className="navlink" to="/account">My account</NavLink></li>
            </ul>
          </nav>
        </div>
        <div className="header__wrapper">
            <div className="header__nav">
                <NavLink to="/"><img src={logo} alt="" /></NavLink>
                <nav>
                    <ul>
                        <li><NavLink className="navlink" to="/about">about</NavLink></li>
                        <li><NavLink className="navlink" to="/map">MAP</NavLink></li>
                        <li><NavLink className="navlink" to="/zoo">Zoos</NavLink></li>
                        <li><NavLink className="navlink" to="/contact">contact us</NavLink></li>
                        <li><NavLink className="navlink" to="/design">design</NavLink></li>
                    </ul>
                </nav>
            </div>
            <div className="header__cta">
                <img src={lupa} alt="" />
                <div className="header__btns">
                    <NavLink to="/login">Log in</NavLink>
                    <NavLink to="/signup">sign up</NavLink>
                </div>
            </div>
            <div onClick={openModal} className='burger'><FaBars /></div>
        </div>
      </div>
    </header>
  )
}

export default Header
