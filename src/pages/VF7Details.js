import React, { useEffect } from 'react';

import carData from '../components/Compares/CarData';
import '../styles/VF7Detail.css'; // Import tệp CSS riêng cho VF7
import Menu from "../components/Menus/Menu";
import VF7Image1 from '../assets/VF7-page1.png'; // Import ảnh từ src/assets
import VF7Image2 from '../assets/VF7-page2.png'; // Import ảnh từ src/assets
import VF7Noithat from '../assets/VF7-noithat.png'; // Import ảnh từ src/assets
import VF7Image3 from '../assets/vf-7.png'; // Import ảnh từ src/assets
import Footer from "../components/Footers/Footer";

const VF7Details = () => {
  const car = carData.find(car => car.MaXe === 'VF 7');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="vf7-container">
      <Menu /> {/* Thêm Menu */}
      <div className="vf7-technical-specs">
        <h1>VẬN HÀNH MẠNH MẼ!</h1>
        <ul>
          <li>
            <strong>Dòng xe:</strong>
            <span>{car.KieuXe}</span>
          </li>
          <li>
            <strong>Quãng đường di chuyển (chuẩn NEDC):</strong>
            <span>{car.TamDiChuyen} km</span>
          </li>
          <li>
            <strong>Công suất tối đa:</strong>
            <span>{car.CongSuatToiDa}</span>
          </li>
          <li>
            <strong>Mô men xoắn cực đại:</strong>
            <span>{car.MoMenXoanCucDai}</span>
          </li>
        </ul>
      </div>
      <div className="vf7-video">
        <h1>VinFast VF7 - Khám phá thế giới mới.</h1>
        <p>Với thiết kế hiện đại và đẳng cấp, VF7 không chỉ mang lại vẻ ngoài ấn tượng mà còn cung cấp hiệu suất vận hành mạnh mẽ. Hành trình của bạn sẽ trở nên thú vị hơn bao giờ hết với sự kết hợp hoàn hảo giữa công nghệ tiên tiến và khả năng tiết kiệm nhiên liệu vượt trội.</p>
        <img src={VF7Image1} alt="VinFast VF 7" className="vf7-description-image" />
      </div>
      <div className="vf7-description">
        <h1>VinFast VF7 - Lựa chọn hoàn hảo cho những hành trình dài.</h1>
        <p>Được trang bị các tính năng an toàn tiên tiến và công nghệ kết nối thông minh, VF7 đảm bảo an toàn và tiện nghi tuyệt đối cho người lái và hành khách. Đây chính là chiếc xe lý tưởng cho những ai yêu thích sự khám phá và muốn tận hưởng sự sang trọng trên mỗi hành trình..</p>
        <img src={VF7Image2} alt="VinFast VF 7" className="vf7-description-image" />
      </div>
      <div className="vf7-detailed-info">
        <div className="vf7-info-main">
          <h2>Thông tin chi tiết</h2>
          <p>Động cơ: {car.DongCo}</p>
          <p>Kích thước: {car.KichThuoc}</p>
          <p>Tốc độ tối đa: {car.TocDoToiDa} km/h</p>
          <p>Thời gian tăng tốc: {car.ThoiGianTangToc} giây</p>
          <p>Dung tích pin/xăng: {car.DungTichPin_Xang}</p>
          <p>Số ghế: {car.SoGhe}</p>
          <p>Tiện nghi: {car.TienNghi}</p>
          <p>Giá: {car.Gia.toLocaleString()} VND</p>
        </div>
        <div className="vf7-info-side">
          <img src={VF7Image3} alt="VinFast VF 7" className="vf7-detailed-info-image" />
        </div>
      </div>
      <div className="vf7-interior-images">
        <h2>VVinFast VF7 - Điểm nhấn trong mọi không gian.</h2>
        <p>Không gian nội thất rộng rãi, sang trọng của VF7 mang lại sự thoải mái tối đa cho mọi hành khách. Các tiện nghi cao cấp và hệ thống giải trí hiện đại giúp bạn tận hưởng từng khoảnh khắc trên mọi cung đường, biến mỗi chuyến đi thành một trải nghiệm đẳng cấp.</p>
        <img src={VF7Noithat} alt="Nội thất VinFast VF7" />
      </div>
      <Footer />

    </div>
  );
};

export default VF7Details;
