import React from 'react'
import "../styles/testimonial.css"
import message from '../img/message.png'
import minimessage from '../img/messagemini.png'
import test1 from '../img/test1.png'
import test2 from '../img/test2.png'
import test3 from '../img/test3.png'
import { NavLink } from 'react-router-dom'

function Testimonials() {
  return (
    <section className='testimonials'>
      <div className="container">
        <div className="testimonials__wrapper">
            <div className="testimonial__top">
                <h3>Testimonials</h3>
                <NavLink to="/feedback"><img src={minimessage} alt="" />Leave feedback</NavLink>

            </div>
            <div className="testimonial__bottom">
                <div className="testimonial__card">
                  <div className="posts">
                  <img className='test__pos' src={message} alt="" />  
                  <p>20 Decepmer 2020</p>
                  <h4>Awesome place to observe my favourite aligators at Florida, the quality of the video is great. </h4>
                  </div>
                  <div className="people">
                    <img src={test1} alt="" />
                    <p className='peoplep'>Adam, Spain</p>
                  </div>
                </div>
                <div className="testimonial__card">
                  <div className="posts">
                  <img className='test__pos' src={message} alt="" />  
                  <p>20 Decepmer 2020</p>
                  <h4>Awesome place to observe my favourite aligators at Florida, the quality of the video is great. </h4>
                  </div>
                  <div className="people">
                    <img src={test2} alt="" />
                    <p className='peoplep'>Adam, Spain</p>
                  </div>
                </div>
                <div className="testimonial__card">
                  <div className="posts">
                  <img className='test__pos' src={message} alt="" />  
                  <p>20 Decepmer 2020</p>
                  <h4>Awesome place to observe my favourite aligators at Florida, the quality of the video is great. </h4>
                  </div>
                  <div className="people">
                    <img src={test3} alt="" />
                    <p className='peoplep'>Adam, Spain</p>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
