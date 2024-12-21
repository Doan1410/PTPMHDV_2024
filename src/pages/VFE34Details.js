import React, { useState, useEffect } from 'react';
import '../styles/VFE34Detail.css'; // Import tệp CSS riêng cho VFE34
import Menu from "../components/Menus/Menu";
import VFE34Noithat from '../assets/VFE34-noithat.png'; // Đảm bảo bạn có ảnh tương ứng cho VFE34
import VFE34Image3 from '../assets/VFE34-page3.png'; // Đảm bảo bạn có ảnh tương ứng cho VFE34
import Footer from "../components/Footers/Footer";
import VFE34Image4 from '../assets/VFE34-page5.png'; // Đảm bảo bạn có ảnh tương ứng cho VFE34
import VFE34Image2 from '../assets/VFE34-page2.png'; // Đảm bảo bạn có ảnh tương ứng cho VFE34

const VFE34Details = () => {
    const [car, setCar] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/cars')
            .then(response => response.json())
            .then(data => {
                const vfe34Car = data.find(car => car.MaXe === 'VF e34');
                setCar(vfe34Car);
            })
            .catch(error => console.error('Error:', error));
        window.scrollTo(0, 0);
    }, []);

    if (!car) {
        return <div>Loading...</div>;
    }

    return (
        <div className="vfe34-container">
            <Menu /> {/* Thêm Menu */}
            <div className="vfe34-technical-specs">
                <h1>SẴN SÀNG CHO MỌI HÀNH TRÌNH</h1>
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
            <div className="vfe34-description">
                <h1>VinFast VF e34 - Sức mạnh vượt trội trên mọi cung đường.</h1>
                <p>Với động cơ mạnh mẽ và khả năng vận hành linh hoạt, VF e34 dễ dàng chinh phục mọi địa hình. Khả năng tiết kiệm nhiên liệu và hiệu suất cao giúp VF e34 trở thành lựa chọn lý tưởng cho những ai yêu thích sự khám phá và muốn tận hưởng cảm giác lái xe mạnh mẽ.</p>
                <img src={VFE34Image4} alt="VinFast VF e34" className="vfe34-description-image" />
            </div>
            <div className="vfe34-description">
                <h1>VinFast VF e34 - Sức mạnh vượt trội trên mọi cung đường.</h1>
                <p>Với động cơ mạnh mẽ và khả năng vận hành linh hoạt, VF e34 dễ dàng chinh phục mọi địa hình. Khả năng tiết kiệm nhiên liệu và hiệu suất cao giúp VF e34 trở thành lựa chọn lý tưởng cho những ai yêu thích sự khám phá và muốn tận hưởng cảm giác lái xe mạnh mẽ.</p>
                <img src={VFE34Image2} alt="VinFast VF e34" className="vfe34-description-image" />
            </div>
            <div className="vfe34-detailed-info">
                <div className="vfe34-info-main">
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
                <div className="vfe34-info-side">
                    <img src={VFE34Image3} alt="VinFast VF e34" className="vfe34-detailed-info-image" />
                </div>
            </div>
            <div className="vfe34-interior-images">
                <h2>VinFast VF e34 - Điểm nhấn trong mọi không gian.</h2>
                <p>Không gian nội thất rộng rãi, sang trọng của VF e34 mang lại sự thoải mái tối đa cho mọi hành khách. Các tiện nghi cao cấp và hệ thống giải trí hiện đại giúp bạn tận hưởng từng khoảnh khắc trên mọi cung đường, biến mỗi chuyến đi thành một trải nghiệm đẳng cấp.</p>
                <img src={VFE34Noithat} alt="Nội thất VinFast VF e34" />
            </div>
            <Footer />
        </div>
    );
};

export default VFE34Details;
