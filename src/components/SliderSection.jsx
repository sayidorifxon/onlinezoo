import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import {  Navigation } from 'swiper/modules';
import "../styles/slidersection.css"
import img1 from '../img/map1.png'
import img2 from '../img/map2.png'
import img3 from '../img/map3.png'
import img4 from '../img/map4.png'
function SliderSection() {
  return (
    <section className='slidersection'>
      <div className="container">
        <h2>Look at this beautiful animals</h2>
        <div className="slidersection__wrapper">
        <Swiper
        breakpoints={{
            640: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 50,
            },
          }}
        slidesPerView={3}
        spaceBetween={10}
        loop={true}
        navigation={true}
        modules={[ Navigation]}
        className="theswiper mySwiper"
      >
        <SwiperSlide><img src={img1} alt="" /> <p>Pandas</p></SwiperSlide>
        <SwiperSlide><img src={img2} alt="" /> <p>Gorillas</p></SwiperSlide>
        <SwiperSlide><img src={img3} alt="" /> <p>Eagles</p></SwiperSlide>
        <SwiperSlide><img src={img4} alt="" /> <p>Aligators</p></SwiperSlide>
        <SwiperSlide><img src={img1} alt="" /> <p>Pandas</p></SwiperSlide>
        <SwiperSlide><img src={img2} alt="" /> <p>Gorillas</p></SwiperSlide>
        <SwiperSlide><img src={img3} alt="" /> <p>Eagles</p></SwiperSlide>
        <SwiperSlide><img src={img4} alt="" /> <p>Aligators</p></SwiperSlide>
        <SwiperSlide><img src={img1} alt="" /> <p>Pandas</p></SwiperSlide>
        </Swiper>
        <div className="slidersection__btns">

        </div>
        </div>
      </div>
    </section>
  )
}

export default SliderSection
