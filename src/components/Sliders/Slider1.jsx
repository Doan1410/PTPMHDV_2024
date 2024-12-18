import React from "react";
import Slider from "react-slick";
import image1 from "../../assets/Slider-16-2.png";
import image3 from "../../assets/Slider-3-2.png";
import image4 from "../../assets/Slider-10-2.png";
import image5 from "../../assets/Slider-17-2.png";
import image6 from "../../assets/Slider-6-1.png";
import image7 from "../../assets/Slider-7.png";
import image8 from "../../assets/Slider-13-1.png";
import './Slider1.css';

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: (
      <button className="slick-prev">
        <span>&lt;</span>
      </button>
    ),
    nextArrow: (
      <button className="slick-next">
        <span>&gt;</span>
      </button>
    ),
  };

  return (
    <div className="slider-container slider-1">
      <Slider {...settings}>
        <div>
          <img
            src={image1}
            alt="Slider 1"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
        <div>
          <img
            src={image3}
            alt="Slider 3"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
        <div>
          <img
            src={image4}
            alt="Slider 4"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
        <div>
          <img
            src={image5}
            alt="Slider 5"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
        <div>
          <img
            src={image6}
            alt="Slider 6"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
        <div>
          <img
            src={image7}
            alt="Slider 7"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
        <div>
          <img
            src={image8}
            alt="Slider 8"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
      </Slider>
      <div className="overlay-text">
        <span className="vinfast">Vinfast</span><br />
        <span className="slogan">Xanh - Đổi mới - Thông minh</span>
      </div>
    </div>
  );
};

export default SimpleSlider;
