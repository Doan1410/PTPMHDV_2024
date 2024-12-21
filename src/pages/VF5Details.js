import React, { useState, useEffect } from 'react';
import '../styles/VF5Detail.css'; // Import tệp CSS riêng cho VF5
import VF5Image from '../assets/vf-5.png'; // Import ảnh từ src/assets
import VF5Noithat from '../assets/vf5-noithat.png'; // Import ảnh từ src/assets
import Footer from "../components/Footers/Footer";
import Menu from "../components/Menus/Menu";

const VF5Details = () => {
    const [car, setCar] = useState(null);

    useEffect(() => {
        // Fetch dữ liệu từ JSON Server
        fetch('http://localhost:8000/cars')
            .then(response => response.json())
            .then(data => {
                // Tìm xe có mã xe là 'VF 5'
                const vf5Car = data.find(car => car.MaXe === 'VF 5');
                setCar(vf5Car);
            })
            .catch(error => console.error('Error:', error));

        // Cuộn trang lên đầu khi thành phần được tải
        window.scrollTo(0, 0);
    }, []);

    if (!car) {
        // Hiển thị trạng thái loading khi dữ liệu chưa được tải xong
        return <div>Loading...</div>;
    }

    return (
        <div className="vf5-container">
            <Menu /> {/* Thêm Menu */}
            <div className="vf5-technical-specs">
                <h1>Vận hành êm ái</h1>
                <p>Công suất tối đa 134 mã lực, tương đương xe xăng 1,6L 4 xi lanh
                    Mạnh mẽ, linh hoạt. Sẵn sàng cho mọi hành trình.</p>
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
            <div className="vf5-video">
                <h1>Xứng danh “đàn anh” Xanh Sành hợp ví</h1>
                <p>VF 5 Plus sở hữu thiết kế hiện đại, trẻ trung, cá tính và nổi bật với các lựa chọn phối màu nội ngoại thất, đảm bảo cá nhân hóa theo phong cách sống, cá tính và sở thích của mỗi khách hàng.</p>
                <video controls>
                    <source src="https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw58161b6b/reserves/VF5/intro-vf5.09092024.webm" />
                    Trình duyệt của bạn không hỗ trợ video tag.
                </video>
            </div>
            <div className="vf5-detailed-info">
                <div className="vf5-info-main">
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
                <div className="vf5-info-side">
                    <img src={VF5Image} alt="VinFast VF 5" className="vf5-detailed-info-image" />
                </div>
            </div>
            <div className="vf5-interior-images">
                <h2>Nội thất tinh tế</h2>
                <p>Không gian rộng rãi, phối màu sành điệu, cuốn hút với các đường viền bắt mắt.</p>
                <img src={VF5Noithat} alt="Nội thất VF 5" />
            </div>
            <Footer />
        </div>
    );
};

export default VF5Details;
