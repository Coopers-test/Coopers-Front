import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "react-responsive";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { CarouselBoxContainer } from "./styles";
import Card_1 from "../../assets/Card_1.svg";
import Card_2 from "../../assets/Card_2.svg";
import Card_3 from "../../assets/Card_3.svg";

const CarouselBox = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1200px)" });
  const isTablet = useMediaQuery({ query: "(min-width: 800px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 500px)" });

  return (
    <CarouselBoxContainer>
      <div className="green--container">
        <p>good things</p>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          slidesPerView={isTablet ? 3 : isMobile ? 1 : 2}
          initialSlide={3}
          spaceBetween={0}
          pagination={true}
          autoplay={true}
          modules={[Pagination, Autoplay]}
        >
          <SwiperSlide>
            <div className="card--container">
              <img src={Card_1} alt="Two men working" />
              <div className="content--card--container">
                <span>function</span>
                <p>Organize your daily job enhance your life performance</p>
                <a href="#">read more</a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card--container">
              <img src={Card_2} alt="One men working" />
              <div className="content--card--container">
                <span>function</span>
                <p>Organize your daily job enhance your life performance</p>
                <a href="#">read more</a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card--container">
              <img src={Card_3} alt="Sewing machine" />
              <div className="content--card--container">
                <span>function</span>
                <p>Organize your daily job enhance your life performance</p>
                <a href="#">read more</a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card--container">
              <img src={Card_1} alt="Two men working" />
              <div className="content--card--container">
                <span>function</span>
                <p>Organize your daily job enhance your life performance</p>
                <a href="#">read more</a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card--container">
              <img src={Card_2} alt="One men working" />
              <div className="content--card--container">
                <span>function</span>
                <p>Organize your daily job enhance your life performance</p>
                <a href="#">read more</a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card--container">
              <img src={Card_3} alt="Sewing machine" />
              <div className="content--card--container">
                <span>function</span>
                <p>Organize your daily job enhance your life performance</p>
                <a href="#">read more</a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </CarouselBoxContainer>
  );
};

export default CarouselBox;
