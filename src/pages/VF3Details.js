import React, { useState, useEffect } from 'react';
import '../styles/VF3Details.css'; // Import tệp CSS riêng cho VF3
import VF3Image from '../assets/VF3-page-3.png'; // Import ảnh từ src/assets
import VF3Image1 from '../assets/VF3-page-4.png'; // Import ảnh từ src/assets
import VF3Video from "../assets/TVC_VF3_Online_1080.mp4";
import VF3Noithat from '../assets/VF3-noithat.png'; // Import ảnh từ src/assets
import Footer from "../components/Footers/Footer";
import Menu from "../components/Menus/Menu";

const VF3Details = () => {
    const [car, setCar] = useState(null);

    useEffect(() => {
        // Fetch dữ liệu từ JSON Server
        fetch('http://localhost:8000/cars')
            .then(response => response.json())
            .then(data => {
                // Tìm xe có mã xe là 'VF 3'
                const vf3Car = data.find(car => car.MaXe === 'VF 3');
                setCar(vf3Car);
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
        <div className="vf3-container">
            <Menu /> {/* Thêm Menu */}
            <div className="vf3-technical-specs">
                <h1>VinFast VF 3 - Tự do sáng tạo, toả sáng chất riêng!</h1>
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

            <div className="vf3-video">
                <h1>VinFast VF 3 - Xe nhỏ, giá trị lớn.</h1>
                <p>Với thiết kế tối giản, nhỏ gọn, cá tính và năng động, VinFast VF 3 sẽ luôn cùng bạn hoà nhịp với xu thế công nghệ di chuyển xanh toàn cầu, trải nghiệm giá trị trên mỗi hành trình, và tự do thể hiện phong cách sống.</p>
                <video controls>
                    <source src={VF3Video} type="video/mp4" />
                    Trình duyệt của bạn không hỗ trợ video tag.
                </video>
            </div>
            <div className="vf3-description">
                <h1>VinFast VF 3 - Biểu tượng mới của cuộc sống đô thị.</h1>
                <p>Vượt lên trên một phương tiện di chuyển thông thường, VinFast VF 3 là biểu tượng mới mang tính cách mạng trong cuộc sống đô thị. Với thiết kế hiện đại, hiệu suất vận hành linh hoạt, tính năng an toàn tiên tiến, cùng chi phí vận hành siêu rẻ, VF 3 sẽ mở ra một cách tiếp cận hoàn toàn mới trong việc lựa chọn phương tiện di chuyển hàng ngày, mang lại sự thuận tiện, dễ dàng và đặc biệt thoải mái cho tất cả mọi người.</p>
                <img src={VF3Image} alt="VinFast VF 3" className="vf3-description-image" />
            </div>
            <div className="vf3-detailed-info">
                <div className="vf3-info-main">
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
                <div className="vf3-info-side">
                    <img src={VF3Image1} alt="VinFast VF 3" className="vf3-detailed-info-image" />
                </div>
            </div>
            <div className="vf3-interior-images">
                <h2>VinFast VF 3 - Luôn đủ chỗ cho mọi người!</h2>
                <img src={VF3Noithat} alt="Noi that xe" />
            </div>
            <Footer />
        </div>
    );
};

export default VF3Details;
