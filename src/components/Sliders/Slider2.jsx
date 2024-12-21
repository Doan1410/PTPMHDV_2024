import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import vf3 from "../../assets/vf-3-2.png";
import vf5 from "../../assets/vf-5.png";
import vf6 from "../../assets/vf-6.png";
import vf7 from "../../assets/vf-7.png";
import vf9 from "../../assets/vf-9.png";
import vfe34 from "../../assets/vf-e34.png";
import vf8 from "../../assets/VF8.png";
import "./Slider2.css";

const Slider2 = () => {
  const navigate = useNavigate();
  const [carInfo, setCarInfo] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/cars')
      .then(response => response.json())
      .then(data => {
        // Lọc và chỉ giữ lại các xe điện VinFast
        const electricCars = data.filter(car => ['VF 3', 'VF 5', 'VF 6', 'VF 7', 'VF 8', 'VF 9', 'VF e34'].includes(car.MaXe));
        
        // Map ảnh đã import vào dữ liệu xe
        const carsWithImages = electricCars.map(car => {
          switch(car.MaXe) {
            case 'VF 3':
              return { ...car, HinhAnh: vf3, detailsLink: '/car/vf3', buyLink: '/buy/vf3' };
            case 'VF 5':
              return { ...car, HinhAnh: vf5, detailsLink: '/car/vf5', buyLink: '/buy/vf5' };
            case 'VF 6':
              return { ...car, HinhAnh: vf6, detailsLink: '/car/vf6', buyLink: '/buy/vf6' };
            case 'VF 7':
              return { ...car, HinhAnh: vf7, detailsLink: '/car/vf7', buyLink: '/buy/vf7' };
            case 'VF 8':
              return { ...car, HinhAnh: vf8, detailsLink: '/car/vf8', buyLink: '/buy/vf8' };
            case 'VF 9':
              return { ...car, HinhAnh: vf9, detailsLink: '/car/vf9', buyLink: '/buy/vf9' };
            case 'VF e34':
              return { ...car, HinhAnh: vfe34, detailsLink: '/car/vfe34', buyLink: '/buy/vfe34' };
            default:
              return car;
          }
        });
        setCarInfo(carsWithImages);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    // autoplaySpeed: 10000,
    prevArrow: (
      <button className="slick-prev">
        <span>&#9664;</span>
      </button>
    ),
    nextArrow: (
      <button className="slick-next">
        <span>&#9654;</span>
      </button>
    ),
  };

  const handleDetailsClick = (link) => {
    navigate(link);
  };

  const handleBuyClick = (car) => {
    navigate(car.buyLink, { state: { car } });
  };

  return (
    <div className="slider-container slider-2">
      <Slider {...settings}>
        {carInfo.map((car, index) => (
          <div className="slide-content" key={index}>
            <img src={car.HinhAnh} alt={car.MaXe} />
            <div className="slider-car-info">
              <h2>{car.MaXe}</h2>
              <p><strong>Dòng xe:</strong> {car.KieuXe} </p>
              <p><strong>Quãng đường:</strong> {car.TamDiChuyen} km</p>
              <p><strong>Số chỗ ngồi:</strong> {car.SoGhe}</p>
              <p><strong>Giá:</strong> {car.Gia.toLocaleString()} VND</p>
              <button className="details-button" onClick={() => handleDetailsClick(car.detailsLink)}>Xem Chi Tiết</button>
              <button className="buy-button" onClick={() => handleBuyClick(car)}>Mua xe</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slider2;
