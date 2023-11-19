import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import photoForSlider from "./img/image 1.jpg";

const MainSectionSlider = () => {
  return (
    <div className="main-section__slider">
      <div className="slider__top">
        <div className="top__name">AI expert</div>
        <div className="top__buttons">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <Swiper navigation={true} modules={[Navigation]}>
        <SwiperSlide>
          <img src={photoForSlider} alt="Robot" />
        </SwiperSlide>
        <div className="slider__info">
          <strong>Jane Doe</strong>
          <p>Javascript developer</p>
        </div>
        <SwiperSlide>
          <img src={photoForSlider} alt="Robot" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photoForSlider} alt="Robot" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MainSectionSlider;
