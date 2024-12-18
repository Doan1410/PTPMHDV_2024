import React from "react";
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

  const carInfo = [
    {
      image: vf3,
      model: "VinFast VF 3",
      range: "200 km (ước tính)",
      seats: "2 chỗ ngồi",
      description: "Xe điện nhỏ gọn, công suất động cơ: 80 kW, dung lượng pin: 30 kWh",
      detailsLink: "/car/vf3",
      buyLink: "/buy/vf3",
      car: { MaXe: "VF 3", HinhAnh: vf3, KieuXe: "Điện", Gia: 100000000 }, // Thêm thông tin xe
    },
    {
      image: vf5,
      model: "VinFast VF 5 Plus",
      range: "300 km (NEDC)",
      seats: "5 chỗ ngồi",
      description: "SUV điện nhỏ gọn, công suất động cơ: 100 kW (134 hp), dung lượng pin: 37.23 kWh",
      detailsLink: "/car/vf5",
      buyLink: "/buy/vf5",
      car: { MaXe: "VF 5", HinhAnh: vf5, KieuXe: "Điện", Gia: 200000000 }, // Thêm thông tin xe
    },
    {
      image: vf6,
      model: "VinFast VF 6",
      range: "250 km (ước tính)",
      seats: "5 chỗ ngồi",
      description: "SUV điện cỡ nhỏ, công suất động cơ: 120 kW, dung lượng pin: 40 kWh",
      detailsLink: "/car/vf6",
      buyLink: "/buy/vf6",
      car: { MaXe: "VF 6", HinhAnh: vf6, KieuXe: "Điện", Gia: 300000000 }, // Thêm thông tin xe
    },
    {
      image: vfe34,
      model: "VinFast VF e34",
      range: "285 km (NEDC)",
      seats: "5 chỗ ngồi",
      description: "SUV điện nhỏ gọn, công suất động cơ: 110 kW (147 hp), dung lượng pin: 42 kWh",
      detailsLink: "/car/vfe34",
      buyLink: "/buy/vfe34",
      car: { MaXe: "VF e34", HinhAnh: vfe34, KieuXe: "Điện", Gia: 400000000 }, // Thêm thông tin xe
    },
    {
      image: vf7,
      model: "VinFast VF 7",
      range: "300 km (ước tính)",
      seats: "5 chỗ ngồi",
      description: "SUV điện cỡ nhỏ, công suất động cơ: 150 kW, dung lượng pin: 50 kWh",
      detailsLink: "/car/vf7",
      buyLink: "/buy/vf7",
      car: { MaXe: "VF 7", HinhAnh: vf7, KieuXe: "Điện", Gia: 500000000 }, // Thêm thông tin xe
    },
    {
      image: vf8,
      model: "VinFast VF 8",
      range: "400 km (WLTP)",
      seats: "5 chỗ ngồi",
      description: "SUV điện cỡ trung, công suất động cơ: 300 kW (402 hp), dung lượng pin: 87.7 kWh",
      detailsLink: "/car/vf8",
      buyLink: "/buy/vf8",
      car: { MaXe: "VF 8", HinhAnh: vf8, KieuXe: "Điện", Gia: 600000000 }, // Thêm thông tin xe
    },
    {
      image: vf9,
      model: "VinFast VF 9",
      range: "550 km (WLTP)",
      seats: "7 chỗ ngồi",
      description: "SUV điện cỡ lớn, công suất động cơ: 300 kW (402 hp), dung lượng pin: 123 kWh",
      detailsLink: "/car/vf9",
      buyLink: "/buy/vf9",
      car: { MaXe: "VF 9", HinhAnh: vf9, KieuXe: "Điện", Gia: 700000000 }, // Thêm thông tin xe
    },
  ];

  const handleDetailsClick = (link) => {
    navigate(link);
  };

  const handleBuyClick = (car) => {
    navigate(car.buyLink, { state: { car: car.car } });
  };

  return (
    <div className="slider-container slider-2">
      <Slider {...settings}>
        {carInfo.map((car, index) => (
          <div className="slide-content" key={index}>
            <img src={car.image} alt={car.model} />
            <div className="slider-car-info">
              <h2>{car.model}</h2>
              <p><strong>Quãng đường:</strong> {car.range}</p>
              <p><strong>Số chỗ ngồi:</strong> {car.seats}</p>
              <p>{car.description}</p>
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
