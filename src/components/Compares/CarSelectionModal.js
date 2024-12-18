import React, { useState } from "react";
import carData from "./CarData"; // Import dữ liệu xe

function CarSelectionModal({ selectedCar, onCarSelection, onClose }) {
  const [selectedCars, setSelectedCars] = useState({});
  
  const totalSelected = Object.values(selectedCars).filter(Boolean).length;

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setSelectedCars(prevState => {
      const newState = { ...prevState };
      if (checked) {
        newState[value] = value;
      } else {
        delete newState[value];
      }
      return newState;
    });
  };

  const handleApplySelection = () => {
    onCarSelection(selectedCars);
  };

  const electricCars = carData.filter(car => car.KieuXe === "Điện");
  const gasolineCars = carData.filter(car => car.KieuXe === "Xăng");

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>X</span>
        <h2>Chọn xe</h2>
        <div className="car-columns">
          <div className="radio-list electric-cars">
            <h3>Xe điện</h3>
            {electricCars.map((car, index) => (
              <div key={index}>
                <input 
                  type="checkbox" 
                  id={`electric-car-${index}`} 
                  value={car.MaXe} 
                  onChange={handleCheckboxChange} 
                  disabled={totalSelected >= 3 && !selectedCars[car.MaXe]} // Vô hiệu hóa nếu đã chọn 3 xe
                />
                <label htmlFor={`electric-car-${index}`}>{car.MaXe}</label>
              </div>
            ))}
          </div>
          <div className="radio-list gasoline-cars">
            <h3>Xe xăng</h3>
            {gasolineCars.map((car, index) => (
              <div key={index}>
                <input 
                  type="checkbox" 
                  id={`gasoline-car-${index}`} 
                  value={car.MaXe} 
                  onChange={handleCheckboxChange} 
                  disabled={totalSelected >= 3 && !selectedCars[car.MaXe]} // Vô hiệu hóa nếu đã chọn 3 xe
                />
                <label htmlFor={`gasoline-car-${index}`}>{car.MaXe}</label>
              </div>
            ))}
          </div>
        </div>
        <button onClick={handleApplySelection}>Xác nhận</button>
      </div>
    </div>
  );
}

export default CarSelectionModal;
