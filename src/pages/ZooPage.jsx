import React from 'react'
import { NavLink } from 'react-router-dom'
import "../styles/zoos.css"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import {  Navigation } from 'swiper/modules';
import img1 from '../img/map3.png'
import img2 from '../img/map1.png'
import img3 from '../img/map2.png'
import img4 from '../img/map4.png'
import img5 from '../img/firs1.png'
import img6 from '../img/first2.png'
import img7 from '../img/second1.png'
import img8 from '../img/listdot.png'
import img9 from '../img/bottomimg.png'
import img10 from '../img/map11.png'
function ZooPage() {
  return (
    <main>
      <section className='zoos'>
        <div className="container">
          <div className="zoos__wrapper">
            <div className="zoos__top">
              <div className="top__left">
                <div className="first">
                <NavLink to="/zoo"><img src={img1} alt="" /></NavLink>
                <p>Pandas</p>
                </div>
                <div className="first">
                <NavLink to="/eagle"><img src={img2} alt="" /></NavLink>
                <p>Eagles</p>
                </div>
                <div className="first">
                <NavLink to="/gorilla"><img src={img3} alt="" /></NavLink>
                <p>Gorillas</p>
                </div>
                <div className="first">
                <NavLink to="/aligator"><img src={img4} alt="" /></NavLink>
                <p>Aligators</p>
                </div>
              </div>
              <div className="top__right">
                <div className="right__first">
                  <div className="right__first1">
                  <h1>The Giant Pandas</h1>
                  <p>Main cameras</p>
                  </div>
                  <div className="right__first2">
                    <img src={img5} alt="" />
                    <img src={img6} alt="" />
                  </div>
                </div>
                <div className="second">
                <iframe src="https://www.youtube.com/embed/I-ovzUNno7g?si=5Pm8KsGjWSQyRdrb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className="third">
                  <div className="third__swiper">
                  <Swiper navigation={true} 
                  breakpoints={{

                    350: {
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 15,
                    },
                    800: {
                      slidesPerView: 3,
                      spaceBetween: 10,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 30,
                    },
                  }}
                  loop={true} slidesPerView={1} spaceBetween={10} modules={[Navigation]} className="thirdSwiper">
                    <SwiperSlide><img src={img7} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={img7} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={img7} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={img7} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={img7} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={img7} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={img7} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={img7} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={img7} alt="" /></SwiperSlide>
                  </Swiper>
                  </div>
                  <div className="boks">

                  </div>
                </div>          
                <div className="fourth">
                  <div className="information">
                    <p>Information</p>
                    <div className="information__cards">
                      <h4>Zoo</h4>
                      <a href="#!">Shenshuping Gengda Panda Center</a>
                    </div>
                    <div className="information__cards">
                      <h4>Type of aviary</h4>
                      <a href="#!">Imitation of the natural environment</a>
                    </div>
                    <div className="information__cards">
                      <h4>Habitat</h4>
                      <a href="#!">Mountains of southwest China</a>
                    </div>
                    <div className="information__cards">
                      <h4>Type of food</h4>
                      <a href="#!">Imitation of the natural environment</a>
                    </div>
                    <div className="information__cards">
                      <h4>Population in the world</h4>
                      <a href="#!">600</a>
                    </div>
                    <div className="information__cards">
                      <h4>About species</h4>
                      <a href="#!">The yards at Shenshuping Gengda Panda Center in China's Wolong Valley are filled with bamboo--making for some very happy panda residents.</a>
                    </div>
                  </div>
                  <div className="facts">
                    <h4>Interesting Facts</h4>
                    <div className="facts__card">
                      <img src={img8} alt="" />
                      <p>The Giant Pandas are omnivores. But whilst pandas will occasionally eat small animals and fish, bamboo counts for 99 percent of their diet.</p>
                    </div>
                    <div className="facts__card">
                      <img src={img8} alt="" />
                      <p>The Giant Pandas are omnivores. But whilst pandas will occasionally eat small animals and fish, bamboo counts for 99 percent of their diet.</p>
                    </div>
                    <div className="facts__card">
                      <img src={img8} alt="" />
                      <p>The Giant Pandas are omnivores. But whilst pandas will occasionally eat small animals and fish, bamboo counts for 99 percent of their diet.</p>
                    </div>
                    <div className="facts__card">
                      <img src={img8} alt="" />
                      <p>The Giant Pandas are omnivores. But whilst pandas will occasionally eat small animals and fish, bamboo counts for 99 percent of their diet.</p>
                    </div>
                    <div className="facts__card">
                      <img src={img8} alt="" />
                      <p>The Giant Pandas are omnivores. But whilst pandas will occasionally eat small animals and fish, bamboo counts for 99 percent of their diet.</p>
                    </div>
                    <div className="facts__card">
                      <img src={img8} alt="" />
                      <p>The Giant Pandas are omnivores. But whilst pandas will occasionally eat small animals and fish, bamboo counts for 99 percent of their diet.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="zoos__bottom">
              <img src={img9} alt="" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ZooPage

