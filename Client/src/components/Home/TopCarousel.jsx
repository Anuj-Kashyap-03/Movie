import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";

// My Imports
import Movieloader from "../layout/Movieloader";
import "./TopCarousel.css";

export default function TopCarousel() {
  const Home_Carousel = useSelector((state) => state.Latest.movies);
  const loading = useSelector((state) => state.Latest.loading);

  return (
    <Swiper
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation={true}
      modules={[Autoplay, Navigation]}
      className="mySwiper"
    >
      {Home_Carousel &&
        Home_Carousel.map((item, index) => {
          let item_img = item.image.replace(",t_web_hs_", ",t_web_m_");

          return (
            <SwiperSlide key={item.Id}>
              <Link to={"/movie/"+item.Id}>
                <img src={item_img} className="d-block w-100" alt={item.name} />
              </Link>
            </SwiperSlide>
          );
        })}
      {!Home_Carousel && loading && (
        <Movieloader class_name="carousel-item_loader"/>
      )}
    </Swiper>
  );
}
