import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../../styles/Compare.css"; // Đường dẫn đúng đến CSS
import carData from "./CarData";



function CarDetail() {
  const { carId } = useParams();
  const carDetails = carData.find(car => car.MaXe === carId);
  const navigate = useNavigate();

  if (!carDetails) {
    return <div>Xe không tồn tại</div>;
  }

  const handleBackToComparison = () => {
    navigate("/comparison");
  };

  return (
    <div className="car-detail">
      <div className="detail-content">
        <div className="car-info">
          <h2>{carDetails.MaXe}</h2>
          <p><strong>Động cơ:</strong> {carDetails.DongCo}</p>
          <p><strong>Công suất tối đa:</strong> {carDetails.TocDoToiDa} km/h</p>
          <p><strong>Kích thước:</strong> {carDetails.KichThuoc}</p>
          <p><strong>Số chỗ ngồi:</strong> {carDetails.SoGhe}</p>
          <p><strong>Thời gian tăng tốc:</strong> {carDetails.ThoiGianTangToc} giây</p>
          <p><strong>Dung tích pin/xăng:</strong> {carDetails.DungTichPin_Xang}</p>
          <p><strong>Tầm di chuyển:</strong> {carDetails.TamDiChuyen} km</p>
          <p><strong>Tiện nghi:</strong> {carDetails.TienNghi}</p>
          <p><strong>Giá:</strong> {carDetails.Gia.toLocaleString()} VND</p>
          <div className="back-button">
            <button onClick={handleBackToComparison}>Quay lại trang so sánh xe</button>
          </div>
        </div>
        <div className="car-image-container">
          <img src={carDetails.HinhAnh} alt={carDetails.MaXe} className="car-image" />
          <img src={carDetails.HinhAnhKhac} alt={`${carDetails.MaXe} - Khác`} className="car-image" />
        </div>
      </div>
    </div>
  );
}

export default CarDetail;
