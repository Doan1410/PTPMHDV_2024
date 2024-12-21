import React, { useState, useEffect } from 'react';
import '../styles/VF9Detail.css'; // Import tệp CSS riêng cho VF9
import Menu from "../components/Menus/Menu";
import VF9Image1 from '../assets/VF9-page1.png'; // Import ảnh từ src/assets
import VF9Noithat from '../assets/VF9-noithat.png'; // Import ảnh từ src/assets
import VF9Image3 from '../assets/vf-9.png'; // Import ảnh từ src/assets
import Footer from "../components/Footers/Footer";
import VF9Video from "../assets/VF9_Lifestyle.mp4";

const VF9Details = () => {
    const [car, setCar] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/cars')
            .then(response => response.json())
            .then(data => {
                const vf9Car = data.find(car => car.MaXe === 'VF 9');
                setCar(vf9Car);
            })
            .catch(error => console.error('Error:', error));
        window.scrollTo(0, 0);
    }, []);

    if (!car) {
        return <div>Loading...</div>;
    }

    return (
        <div className="vf9-container">
            <Menu /> {/* Thêm Menu */}
            <div className="vf9-technical-specs">
                <h1>Lựa chọn tận hưởng</h1>
                <h2>Đẳng cấp</h2>
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
            <div className="vf9-video">
                <h1>VinFast VF9 - Công nghệ Cho cuộc sống.</h1>
                <p>Hợp tác cùng những đối tác hàng đầu trên toàn cầu, VinFast áp dụng những công nghệ hiện đại với thiết kế tập trung vào con người, đem lại trải nghiệm. Trợ lý ảo cùng loạt Dịch vụ thông minh tiên tiến, đồng hành cùng bạn hướng tới tương lai tốt đẹp hơn.</p>
                <video controls>
                    <source src={VF9Video} type="video/mp4" />
                    Trình duyệt của bạn không hỗ trợ video tag.
                </video>
            </div>
            <div className="vf9-description">
                <h2>VinFast VF9 - Mạnh mẽ, bề thế</h2>
                <h1>Nâng tầm thời thượng</h1>
                <p>Thiết kế được lấy cảm hứng từ những chiếc du thuyền hạng sang, hoà hợp với những đường nét mạnh mẽ và phóng khoáng, đem lại vẻ ngoài độc đáo và sang trọng, xứng tầm với chủ nhân tinh hoa.</p>
                <img src={VF9Image1} alt="VinFast VF 9" className="vf9-description-image" />
            </div>
            <div className="vf9-detailed-info">
                <div className="vf9-info-main">
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
                <div className="vf9-info-side">
                    <img src={VF9Image3} alt="VinFast VF 9" className="vf9-detailed-info-image" />
                </div>
            </div>
            <div className="vf9-interior-images">
                <h2>VinFast VF9 - Điểm nhấn trong mọi không gian.</h2>
                <p>Không gian nội thất rộng rãi, sang trọng của VF9 mang lại sự thoải mái tối đa cho mọi hành khách. Các tiện nghi cao cấp và hệ thống giải trí hiện đại giúp bạn tận hưởng từng khoảnh khắc trên mọi cung đường, biến mỗi chuyến đi thành một trải nghiệm đẳng cấp.</p>
                <img src={VF9Noithat} alt="Nội thất VinFast VF9" />
            </div>
            <Footer />
        </div>
    );
};

export default VF9Details;
