import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import Movieloader from "../layout/Movieloader";
import "./MovieCarosule.css";

// import required modules
import { FreeMode, Navigation } from "swiper";

export default function Movie_carousel({ List, loading }) {
  return (
    <>
      <Swiper
        slidesPerView={window.innerWidth > 900 ? 6 : 3}
        freeMode={true}
        navigation={true}
        modules={[FreeMode, Navigation]}
        className="mySwiper2"
        id="mySwiper2"
      >
        {List &&
          List.map((item, index) => {
            let item_img = item.image.replace(",t_web_hs_", ",t_web_vl_");

            return (
              <SwiperSlide key={item.Id}>
                <Link to={"/movie/"+item.Id}>
                  <img
                    src={item_img}
                    className="d-block w-100"
                    alt={item.name}
                  />
                </Link>
              </SwiperSlide>
            );
          })}
        {!List && loading && <Movieloader class_name="carousel-item_loader" />}
      </Swiper>
    </>
  );
}
