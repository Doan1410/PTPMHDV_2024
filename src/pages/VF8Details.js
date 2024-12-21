import React, { useState, useEffect } from 'react';
import '../styles/VF8Detail.css'; // Import tệp CSS riêng cho VF8
import Menu from "../components/Menus/Menu";
import VF8Image1 from '../assets/VF8-page1.png'; // Import ảnh từ src/assets
import VF8Image2 from '../assets/VF8-page3.png'; // Import ảnh từ src/assets
import VF8Noithat from '../assets/VF8-noithat.png'; // Import ảnh từ src/assets
import VF8Image3 from '../assets/VF8.png'; // Import ảnh từ src/assets
import VF8Safety1 from '../assets/VF8-safety.png'; // Import ảnh từ src/assets
import VF8Safety2 from '../assets/VF8-safety1.png'; // Import ảnh từ src/assets
import Footer from "../components/Footers/Footer";

const VF8Details = () => {
    const [car, setCar] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/cars')
            .then(response => response.json())
            .then(data => {
                const vf8Car = data.find(car => car.MaXe === 'VF 8');
                setCar(vf8Car);
            })
            .catch(error => console.error('Error:', error));
        window.scrollTo(0, 0);
    }, []);

    if (!car) {
        return <div>Loading...</div>;
    }

    return (
        <div className="vf8-container">
            <Menu /> {/* Thêm Menu */}
            <div className="vf8-technical-specs">
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
            <div className="vf8-video">
                <h1>VinFast VF8 - Sự kết hợp hoàn hảo giữa công nghệ và phong cách.</h1>
                <p>Với thiết kế hiện đại và đẳng cấp, VF8 không chỉ mang lại vẻ ngoài ấn tượng mà còn cung cấp hiệu suất vận hành mạnh mẽ. Hành trình của bạn sẽ trở nên thú vị hơn bao giờ hết với sự kết hợp hoàn hảo giữa công nghệ tiên tiến và khả năng tiết kiệm nhiên liệu vượt trội.</p>
                <img src={VF8Image1} alt="VinFast VF 8" className="vf8-description-image" />
            </div>
            <div className="vf8-description">
                <h1>VinFast VF8 - Sức mạnh vượt trội trên mọi cung đường.</h1>
                <p>Với động cơ mạnh mẽ và khả năng vận hành linh hoạt, VF8 dễ dàng chinh phục mọi địa hình. Khả năng tiết kiệm nhiên liệu và hiệu suất cao giúp VF8 trở thành lựa chọn lý tưởng cho những ai yêu thích sự khám phá và muốn tận hưởng cảm giác lái xe mạnh mẽ.</p>
                <img src={VF8Image2} alt="VinFast VF 8" className="vf8-description-image" />
            </div>
            <div className="vf8-detailed-info">
                <div className="vf8-info-main">
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
                <div className="vf8-info-side">
                    <img src={VF8Image3} alt="VinFast VF 8" className="vf8-detailed-info-image" />
                </div>
            </div>
            <div className="vf8-safety">
                <h2>An toàn của gia đình bạn là ưu tiên trên hết của VinFast</h2>
                <p>Tất cả các xe VinFast tuân thủ các tiêu chuẩn an toàn nghiêm ngặt nhất và được trang bị những công nghệ hiện đại theo chuẩn quốc tế, mang lại sự yên tâm tuyệt đối cho gia đình bạn trên mọi chặng đường.</p>
                <div className="vf8-image-text">
                    <div className="vf8-image-text-item">
                        <img src={VF8Safety1} alt="VinFast VF 8 Safety" />
                        <h3>Cứu hộ khẩn cấp</h3>
                        <p>Khi nguy cấp, bạn có thể dễ dàng nhấn nút SOS tích hợp sẵn để nhận được sự trợ giúp nhanh chóng.</p>
                    </div>
                    <div className="vf8-image-text-item">
                        <img src={VF8Safety2} alt="VinFast VF 8" />
                        <h3>Hệ thống 11 túi khí</h3>
                        <p>Sở hữu nhiều túi khí nhất trong phân khúc, bảo vệ bạn trong những trường hợp khẩn cấp.</p>
                    </div>
                </div>
            </div>
            <div className="vf8-interior-images">
                <h2>VinFast VF8 - Điểm nhấn trong mọi không gian.</h2>
                <p>Không gian nội thất rộng rãi, sang trọng của VF8 mang lại sự thoải mái tối đa cho mọi hành khách. Các tiện nghi cao cấp và hệ thống giải trí hiện đại giúp bạn tận hưởng từng khoảnh khắc trên mọi cung đường, biến mỗi chuyến đi thành một trải nghiệm đẳng cấp.</p>
                <img src={VF8Noithat} alt="Nội thất VinFast VF8" />
            </div>
            <Footer />
        </div>
    );
};

export default VF8Details;
