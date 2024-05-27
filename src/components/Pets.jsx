import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "../styles/pets.css"
import heart from "../img/heart.png";
import pets1 from "../img/pets1.png";
import pets2 from "../img/pets2.png";
import pets3 from "../img/pets3.png";
import pets4 from "../img/pets4.png";
import pets5 from "../img/pets5.png";
import pets6 from "../img/pets6.png";
import PetCard from "../components/PetCard.jsx";
function Pets() {
  return (
    <section className="pets">
      <div className="container">
        <div className="pets__top">
          <h2>Pets in zoo </h2>
          <button>
            <img src={heart} alt="" /> Choose your Favorite
          </button>
        </div>
        <div className="pets__frid">
          <Swiper
            breakpoints={{
              
              355: {
                slidesPerView: 1,
              },
              375: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              430: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              580: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              670: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              700: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              740: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
              },
              975: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1350: {
                slidesPerView: 3.2,
              },
              1320: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
            loop={true}
            slidesPerView={3.2}
            navigation={true}
            modules={[Navigation]}
            className="theswiper2 mySwiper"
          >
            <SwiperSlide>
              <PetCard
                img={pets1}
                title="Panda"
                text="Shenshuping Gengda Panda Center"
              />
            </SwiperSlide>
            <SwiperSlide>
              <PetCard img={pets2} title="Eagles" text="Catalina Island" />
            </SwiperSlide>
            <SwiperSlide>
              <PetCard img={pets3} title="Gorillas" text="GRACE gorillas" />
            </SwiperSlide>
            <SwiperSlide>
              <PetCard
                img={pets4}
                title="Aligators"
                text="St. Augustine's Alligator Farm Zoological Park"
              />
            </SwiperSlide>
            <SwiperSlide>
              <PetCard
                img={pets5}
                title="Elephants"
                text="Tembe Elephant Park"
              />
            </SwiperSlide>
            <SwiperSlide>
              <PetCard img={pets6} title="Lemurs" text="Madagascar" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Pets;
