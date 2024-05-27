import React from 'react'
import "../styles/hero.css"
import panda from '../img/Panda.png'
import herobg from "../img/Hero.png"
import { NavLink } from 'react-router-dom'
function Hero() {
  return (
    <section className='hero'>
        <img className='herobg' src={herobg} alt="" />
      <div className="container">
        <div className="hero__wrapper">
            <div className="hero__content">
                <h1>Watch your favorite <span>animals online</span></h1>
                <p>Observe different animals from around the world online in live time. Help vulunteers to take a good care of animals, donate to your favorite ones.</p>
                <div className="hero__cta">
                <NavLink to="/map">Watch now </NavLink>
                <NavLink className="hidden__btn" to="/map">Donate</NavLink>
                </div>
            </div>
            <NavLink to="/zoo"><img className='pandaimg' src={panda} alt="" /></NavLink>
        </div>
      </div>
    </section>
  )
}

export default Hero
