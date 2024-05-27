import React from 'react'
import "../styles/pay.css"
import payback from '../img/pay.png'
import pay1 from '../img/pay1.png'
import pay2 from '../img/pay2.png'
import pay3 from '../img/pay3.png'
import pay4 from '../img/pay4.png'
import { NavLink } from 'react-router-dom'
function Pay() {
  return (
    <section className='pay'>
        <img className='pay__pos2' src={pay4} alt="" />
        <img className='pay__pos3' src={pay4} alt="" />
        <img className='pay__pos' src={payback} alt="" />
      <div className="container">
        <div className="pay__wrapper">
            <div className="pay__top">
                <p>Pay and feed</p>
                <NavLink to="/donate" href="#!">Donate to volunteers</NavLink>
            </div>
            <div className="pay__bottom">
                <div className="pay__card">
                    <div className="pay__box">
                        <img src={pay1} alt="" />
                    </div>
                    <p>You donate to your favourite animals </p>
                </div>
                <div className="pay__card">
                    <div className="pay__box">
                        <img src={pay2} alt="" />
                    </div>
                    <p>Zoo Keepers feed animals with their favourite food</p>
                </div>
                <div className="pay__card">
                    <div className="pay__box">
                        <img src={pay3} alt="" />
                    </div>
                    <p>Animals are healthy and happy</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Pay
