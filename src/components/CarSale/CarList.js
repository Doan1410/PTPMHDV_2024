import React from 'react';
import { useNavigate } from 'react-router-dom'; // Thêm import useNavigate

const CarList = ({ cars, handleBuyClick }) => {
  const navigate = useNavigate(); // Khởi tạo useNavigate

  const handleDetailsClick = (car) => {
    navigate(`/car/${encodeURIComponent(car.MaXe).replace(/%20/g, '')}`); // Điều hướng đến trang chi tiết xe
  };

  return (
    <div className="car-list">
      {cars.map((car) => (
        <div className="car-card" key={car.MaXe}>
          <img src={car.HinhAnh} alt={car.MaXe} />
          <h3>{car.MaXe}</h3>
          <p>Giá chỉ từ: {car.Gia.toLocaleString()} VND</p>
          <p>Số chỗ ngồi: {car.SoGhe}</p>
          <p>Quãng đường lên tới: {car.TamDiChuyen} km</p>
          <div className="car-card-buttons">
            <button className="order-button" onClick={() => handleBuyClick(car)}>Đặt mua</button>
            <button className="details-button" onClick={() => handleDetailsClick(car)}>Xem Chi Tiết</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarList;
