import React from 'react'
import "../styles/footer.css"
import logo from '../img/logo.png'
import { NavLink, useLocation } from 'react-router-dom'
function Footer() {
  let location = useLocation()
  return (
    <footer className={location.pathname === "/signup" ? 'no_footer' : "footer" && location.pathname === "/login" ? 'no_footer'  : "footer" && location.pathname === "/contact" ? 'no_footer' : "footer" && location.pathname === "/donate" ? 'no_footer' : "footer" && location.pathname === "/feedback" ? 'no_footer' : "footer" }>
      <div className="container">
        <div className="footer__wrapper">
            <div className="footer__left">
                <img src={logo} alt="" />
                <nav>
                    <ul>
                        <li><NavLink className="navlink">about</NavLink></li>
                        <li><NavLink className="navlink" to="/map">MAP</NavLink></li>
                        <li><NavLink className="navlink">Zoos</NavLink></li>
                        <li><NavLink className="navlink" to="/contact">contact us</NavLink></li>
                        <li><NavLink className="navlink">design</NavLink></li>
                    </ul>
                </nav>
            </div>
            <div className="footer__right">
                <h5>Design by Lemeshko Kateryna</h5>
                <h5>©RSSchool and ©Yem Digital 2021</h5>
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
