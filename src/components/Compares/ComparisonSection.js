import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import carData from "./CarData";
import Conclusion from "./Conclusion";
import "../../styles/Compare.css"; // Đường dẫn đúng đến CSS

function ComparisonSection() {
  const [selectedCar, setSelectedCar] = useState(() => {
    const savedCars = localStorage.getItem("selectedCar");
    return savedCars ? JSON.parse(savedCars) : { car1: null, car2: null, car3: null };
  });
  const [showModal, setShowModal] = useState(false);
  const [currentCarBox, setCurrentCarBox] = useState(null);


  useEffect(() => {
    localStorage.setItem("selectedCar", JSON.stringify(selectedCar));
  }, [selectedCar]);

  const handleCarClick = (carBox) => {
    setCurrentCarBox(carBox);
    setShowModal(true);
  };

  const handleCarSelection = (selectedCars) => {
    setSelectedCar(prevState => {
      const newState = { ...prevState };
      Object.keys(selectedCars).forEach((key, index) => {
        if (index < 3) {
          newState[`car${index + 1}`] = selectedCars[key];
        }
      });
      return newState;
    });
    setShowModal(false);
  };

  const handleRemoveAllCars = () => {
    setSelectedCar({ car1: null, car2: null, car3: null });
  };

  return (
    <div className="comparison-section">
      <Header />
      <CarSelection onCarClick={handleCarClick} selectedCar={selectedCar} />
      {Object.values(selectedCar).some(car => car) && (
        <>
          <div className="view-details-container">
            {selectedCar.car1 && (
              <div className="view-details-wrapper">
                <Link to={`/car/${encodeURIComponent(selectedCar.car1).replace(/%20/g, '')}`}>
                  <button className="view-details">Xem chi tiết</button>
                </Link>
              </div>
            )}
            {selectedCar.car2 && (
              <div className="view-details-wrapper">
                <Link to={`/car/${encodeURIComponent(selectedCar.car2).replace(/%20/g, '')}`}>
                  <button className="view-details">Xem chi tiết</button>
                </Link>
              </div>
            )}
            {selectedCar.car3 && (
              <div className="view-details-wrapper">
                <Link to={`/car/${encodeURIComponent(selectedCar.car3).replace(/%20/g, '')}`}>
                  <button className="view-details">Xem chi tiết</button>
                </Link>
              </div>
            )}

          </div>
          <div className="remove-all-container">
            <button className="remove-all-cars" onClick={handleRemoveAllCars}>
              Xóa tất cả lựa chọn
            </button>
          </div>
        </>
      )}
      <ComparisonTable selectedCar={selectedCar} />
      <Conclusion selectedCar={selectedCar} />
      {showModal && (
        <CarSelectionModal
          selectedCar={selectedCar}
          onCarSelection={handleCarSelection}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}

// Tiêu đề
function Header() {
  return (
    <div className="header">
      <h1>So sánh xe VinFast</h1>
      <p>Vui lòng chọn từ 2 xe trở lên để đánh giá xe tốt nhất</p>
    </div>
  );
}

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

// Ô chọn xe
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

// Modal để chọn xe
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
        <div className="checkbox-list">
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
        <div className="checkbox-list">
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
        <button onClick={handleApplySelection}>Xác nhận</button>
      </div>
    </div>
  );
}

// Bảng so sánh
function ComparisonTable({ selectedCar }) {
  const car1Details = carData.find(car => car.MaXe === selectedCar.car1);
  const car2Details = carData.find(car => car.MaXe === selectedCar.car2);
  const car3Details = carData.find(car => car.MaXe === selectedCar.car3);

  return (
    <div className="comparison-table">
      <table>
        <thead>
          <tr>
            <th>Tính năng</th>
            <th>{car1Details?.MaXe}</th>
            <th>{car2Details?.MaXe}</th>
            <th>{car3Details?.MaXe}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Động cơ</td>
            <td>{car1Details?.DongCo}</td>
            <td>{car2Details?.DongCo}</td>
            <td>{car3Details?.DongCo}</td>
          </tr>
          <tr>
            <td>Công suất tối đa</td>
            <td>{car1Details?.TocDoToiDa} km/h</td>
            <td>{car2Details?.TocDoToiDa} km/h</td>
            <td>{car3Details?.TocDoToiDa} km/h</td>
          </tr>
          <tr>
            <td>Số chỗ ngồi</td>
            <td>{car1Details?.SoGhe}</td>
            <td>{car2Details?.SoGhe}</td>
            <td>{car3Details?.SoGhe}</td>
          </tr>
          <tr>
            <td>Thời gian tăng tốc</td>
            <td>{car1Details?.ThoiGianTangToc} giây</td>
            <td>{car2Details?.ThoiGianTangToc} giây</td>
            <td>{car3Details?.ThoiGianTangToc} giây</td>
          </tr>
          <tr>
            <td>Dung tích pin/Xăng</td>
            <td>{car1Details?.DungTichPin_Xang}</td>
            <td>{car2Details?.DungTichPin_Xang}</td>
            <td>{car3Details?.DungTichPin_Xang}</td>
          </tr>
          <tr>
            <td>Tầm di chuyển</td>
            <td>{car1Details?.TamDiChuyen} km</td>
            <td>{car2Details?.TamDiChuyen} km</td>
            <td>{car3Details?.TamDiChuyen} km</td>
          </tr>
          <tr>
            <td>Tiện nghi</td>
            <td>{car1Details?.TienNghi}</td>
            <td>{car2Details?.TienNghi}</td>
            <td>{car3Details?.TienNghi}</td>
          </tr>
          <tr>
            <td>Giá</td>
            <td>{car1Details?.Gia.toLocaleString()} VND</td>
            <td>{car2Details?.Gia.toLocaleString()} VND</td>
            <td>{car3Details?.Gia.toLocaleString()} VND</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ComparisonSection;
