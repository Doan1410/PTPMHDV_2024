import React from "react";
import CarBox from "./CarBox";

// Chọn xe
function CarSelection({ onCarClick, selectedCar }) {
  return (
    <div className="car-selection">
      <CarBox id="car-box-1" onCarClick={onCarClick} selectedCar={selectedCar.car1} />
      <CarBox id="car-box-2" onCarClick={onCarClick} selectedCar={selectedCar.car2} />
      <CarBox id="car-box-3" onCarClick={onCarClick} selectedCar={selectedCar.car3} />
    </div>
  );
}

export default CarSelection;
