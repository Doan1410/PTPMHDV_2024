import React from "react";
import carData from "./CarData"; // Import dữ liệu xe

function CarBox({ id, onCarClick, selectedCar }) {
  const carDetails = carData.find(car => car.MaXe === selectedCar);

  return (
    <div className="car-box" id={id}>
      <div className="box-content">
        {carDetails ? (
          <>
            <img src={carDetails.HinhAnh} alt={carDetails.MaXe} className="car-image" />
            <p>{carDetails.MaXe}</p>
          </>
        ) : (
          <div onClick={() => onCarClick(id)}>
            <span className="plus">+</span>
            <p>Lựa chọn xe</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CarBox;
  