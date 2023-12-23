import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Services = () => {
  return (
    <div className="serv">
      <div className="main-title">Services</div>
      <Swiper
        spaceBetween={30}
        effect="fade"
        initialSlide={3}
        centeredSlides={true}
        loop={true}
        breakpoints={{
          400: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <span>01</span>
          <div className="cotent">
            <i className="fa-solid fa-code"></i>
            <h4>Web devlopment</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
              facilis.
            </p>
          </div>
          <div class="info">
            <a href="">Read More</a>
            <i class="fas fa-long-arrow-alt-right"></i>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <span>01</span>
          <div className="cotent">
            <i className="fa-solid fa-code"></i>
            <h4>Web devlopment</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
              facilis.
            </p>
          </div>
          <div class="info">
            <a href="">Read More</a>
            <i class="fas fa-long-arrow-alt-right"></i>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <span>01</span>
          <div className="cotent">
            <i className="fa-solid fa-code"></i>
            <h4>Web devlopment</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
              facilis.
            </p>
          </div>
          <div class="info">
            <a href="">Read More</a>
            <i class="fas fa-long-arrow-alt-right"></i>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <span>01</span>
          <div className="cotent">
            <i className="fa-solid fa-code"></i>
            <h4>Web devlopment</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
              facilis.
            </p>
          </div>
          <div class="info">
            <a href="">Read More</a>
            <i class="fas fa-long-arrow-alt-right"></i>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <span>01</span>
          <div className="cotent">
            <i className="fa-solid fa-code"></i>
            <h4>Web devlopment</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
              facilis.
            </p>
          </div>
          <div class="info">
            <a href="">Read More</a>
            <i class="fas fa-long-arrow-alt-right"></i>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <span>01</span>
          <div className="cotent">
            <i className="fa-solid fa-code"></i>
            <h4>Web devlopment</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
              facilis.
            </p>
          </div>
          <div class="info">
            <a href="">Read More</a>
            <i class="fas fa-long-arrow-alt-right"></i>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Services;
