import React, { useEffect } from 'react';

import carData from '../components/Compares/CarData';
import Menu from "../components/Menus/Menu";
import '../styles/VF6Detail.css';
import VF6Image from '../assets/vf-6.png'; // Import ảnh từ src/assets
import VF6Image1 from '../assets/VF6-page.png' // Import ảnh từ src/assets
import VF6Image2 from '../assets/VF6-Lifestyle-03.jpg' // Import ảnh từ src/assets
import VF6Noithat from '../assets/VF6-noithat.png' // Import ảnh từ src/assets
import Footer from "../components/Footers/Footer";


const VF6Details = () => {
    const car = carData.find(car => car.MaXe === 'VF 6');

    useEffect(() => {
            window.scrollTo(0, 0);
        }, []);
    return (
        <div className="vf6-container">
            <Menu /> {/* Thêm Menu */}
            <div className="vf6-technical-specs">
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
            <div className="vf6-video">
                <h1>Cùng VF 6 ghi dấu từng khoảnh khắc,
                    khởi đầu mọi hành trình.
                </h1>
                <p>Với thiết kế tối giản, nhỏ gọn, cá tính và năng động, VinFast VF 3 sẽ luôn cùng bạn hoà nhịp với xu thế công nghệ di chuyển xanh toàn cầu, trải nghiệm giá trị trên mỗi hành trình, và tự do thể hiện phong cách sống.</p>
                <img src={VF6Image1} alt="VinFast VF 6" className="vf6-description-image" />

            </div>
            <div className="vf6-description">
                <h1>VinFast VF6 - Sức mạnh và phong cách.</h1>
                <p>VinFast VF6 không chỉ nổi bật với ngoại hình mạnh mẽ và quyến rũ mà còn chinh phục người dùng bởi khả năng vận hành ấn tượng. Khả năng tiết kiệm nhiên liệu và hiệu suất vượt trội giúp VF6 trở thành lựa chọn hoàn hảo cho những ai đam mê xe hơi và yêu thích sự khám phá.</p>
                <img src={VF6Image2} alt="VinFast VF 6" className="vf6-description-image" />
            </div>
            <div className="vf6-detailed-info">
                <div className="vf6-info-main">
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
                <div className="vf6-info-side">
                    <img src={VF6Image} alt="VinFast VF 6" className="vf6-detailed-info-image" />
                </div>
            </div>
            <div className="vf6-interior-images">
                <h2>VinFast VF6 - Định nghĩa mới của sự sang trọng và tiện nghi.</h2>
                <p>Với nội thất sang trọng và không gian rộng rãi, VF6 mang lại sự thoải mái và tiện nghi tối đa cho người lái và hành khách. Hệ thống giải trí cao cấp và công nghệ kết nối hiện đại biến mỗi chuyến đi thành một trải nghiệm thú vị.</p>

                <img src={VF6Noithat} alt="Noi that xê " />
            </div>
            <Footer />

        </div>
    );
};

export default VF6Details;
