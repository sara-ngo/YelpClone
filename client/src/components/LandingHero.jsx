import React from 'react'
import i1 from '../assets/images/hero.jpeg'
import i2 from '../assets/images/slide1.jpg'
import i3 from '../assets/images/slide2.jpg'
import i4 from '../assets/images/slide3.jpg'
import i5 from '../assets/images/slide4.jpg'
import { useNavigate } from 'react-router-dom'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Autoplay, Pagination } from 'swiper'

const LandingHero = () => {
  const sliderData = [i1, i2, i3, i4, i5];
  let navigate = useNavigate();

  return (
    <div className="hero_Container">
      <Swiper
        pagination={{
          clickable: true,
        }}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay, Pagination]}
        className="swiper"
      >
        {sliderData.map((content, i) => {
          return (
            <SwiperSlide key={i}>
              <div className="hero_container_up_image">
                <img className="w-100" src={content} alt="" />
                <div className="hero_container_up_image_overlay"></div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="hero_content_landing d-flex flex-column justify-content-center align-items-center">
        <h1 className="text-white text-center display-2 fw600 mb-3">
          Grab a <span className="fw-bold text-warning">Restaurant</span>
        </h1>
        <button
          onClick={() => navigate(`/home`)}
          className="btn btn-light py-2 px-4"
        >
          Get Started
        </button>
      </div>
    </div>
  )
}

export default LandingHero
