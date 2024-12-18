import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/CarBought.css';
import carData from '../components/Compares/CarData.js';
import Menu from "../components/Menus/Menu";

const CarBought = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { car } = location.state || {};
    const [stage, setStage] = useState(1);
    const [selectedImage, setSelectedImage] = useState(car?.HinhAnh);
    const [error, setError] = useState({});
    const [isGasCar, setIsGasCar] = useState(car?.KieuXe === 'Xăng');
    const [displayPrice, setDisplayPrice] = useState(car?.Gia);
    const [version, setVersion] = useState('');
    const [battery, setBattery] = useState('');

    if (!car) {
        return <div>Không có thông tin xe. Vui lòng chọn xe từ trang trước.</div>;
    }

    const handleVersionChange = (event) => {
        const version = event.target.value;
        setVersion(version);
        if (version === 'NangCao') {
            setSelectedImage(car.HinhAnhKhac);
        } else {
            setSelectedImage(car.HinhAnh);
        }
        const selectedCar = carData.find(c => c.MaXe === car.MaXe);
        setIsGasCar(selectedCar?.KieuXe === 'Xăng');
    };

    const handleBatteryChange = (event) => {
        const batteryValue = event.target.value;
        setBattery(batteryValue);
        if (batteryValue === 'Included') {
            setDisplayPrice(car.Gia + 20000000);
        } else {
            setDisplayPrice(car.Gia);
        }
    };

    const nextStage = () => {
        const newError = {};
        if (stage === 1) {
            const selectedVersion = document.querySelector('input[name="version"]:checked');
            if (!selectedVersion) newError.version = "Vui lòng chọn mẫu xe.";
            if (!isGasCar) {
                const selectedBattery = document.querySelector('input[name="battery"]:checked');
                if (!selectedBattery) newError.battery = "Vui lòng chọn dịch vụ pin đi kèm.";
            }
        } else if (stage === 2) {
            const name = document.querySelector('input[name="name"]').value.trim();
            const phone = document.querySelector('input[name="phone"]').value.trim();
            const email = document.querySelector('input[name="email"]').value.trim();
            if (!name) newError.name = "Vui lòng nhập tên.";
            if (!phone) newError.phone = "Vui lòng nhập số điện thoại.";
            if (!email) newError.email = "Vui lòng nhập địa chỉ email.";
        }
        if (Object.keys(newError).length > 0) {
            setError(newError);
        } else {
            setError({});
            if (stage === 3) {
                const nameField = document.querySelector('input[name="name"]');
                const phoneField = document.querySelector('input[name="phone"]');
                const emailField = document.querySelector('input[name="email"]');
                const documentNumberField = document.querySelector('input[name="documentNumber"]');
                const showroomField = document.querySelector('select[name="showroom"]');

                // Kiểm tra sự tồn tại của các trường
                const name = nameField ? nameField.value.trim() : '';
                const phone = phoneField ? phoneField.value.trim() : '';
                const email = emailField ? emailField.value.trim() : '';
                const documentNumber = documentNumberField ? documentNumberField.value.trim() : '';
                const showroom = showroomField ? showroomField.value : '';

                navigate('/payment-process', {
                    state: {
                        car,
                        version,
                        battery,
                        displayPrice,
                        name,
                        phone,
                        email,
                        documentNumber,
                        showroom,
                        isGasCar
                    }
                });
            } else {
                setStage(stage + 1);
            }
        }
    };

    // Rest of your code...
    return (
        <div>
            <Menu></Menu>
            <section className="car-bought">
                <h2>{`VINFAST - ${car.MaXe}`}</h2>
                <div className="content-container">
                    <div className="car-details">
                        <div className="car-image">
                            <img src={selectedImage} alt={car.MaXe} />
                        </div>
                        <div className="car-info">
                            <h3>Thông Tin Chi Tiết</h3>
                            <p><strong>Công suất tối đa:</strong> {car.TocDoToiDa} km/h</p>
                            <p><strong>Quãng đường di chuyển 1 lần sạc đầy lên tới:</strong> {car.TamDiChuyen} km (NEDC)</p>
                            <p><strong>Kích thước:</strong> {car.KichThuoc}</p>
                            <p className="note">Các thông tin sản phẩm có thể thay đổi mà không cần báo trước.</p>
                        </div>
                    </div>
                    <div className="selection-section">
                        <div className="progress-bar">
                            <div className={`progress-step ${stage >= 1 ? 'active' : ''} ${stage > 1 ? 'completed' : ''}`}>Lựa Chọn Dịch Vụ</div>
                            <div className={`progress-step ${stage >= 2 ? 'active' : ''} ${stage > 2 ? 'completed' : ''}`}>Nhập Thông Tin</div>
                            <div className={`progress-step ${stage === 3 ? 'active' : ''}`}>Đặt Cọc</div>
                        </div>
                        {stage === 1 && (
                            <div>
                                <h3>Lựa Chọn Dịch Vụ</h3>
                                <p>Quý khách vui lòng chọn Mẫu xe và Dịch vụ đi kèm phù hợp !</p>
                                <h3>Mẫu xe</h3>
                                <div className="radio-group">
                                    <label className="radio-label">
                                        <input type="radio" name="version" value="CoBan" onChange={handleVersionChange} />
                                        <span className="radio-custom"></span>
                                        Mẫu cơ bản
                                    </label>
                                    <label className="radio-label">
                                        <input type="radio" name="version" value="NangCao" onChange={handleVersionChange} />
                                        <span className="radio-custom"></span>
                                        Mẫu nâng cao
                                    </label>
                                    {error.version && <div className="error-message">{error.version}</div>}
                                </div>
                                {!isGasCar && (
                                    <>
                                        <h3>Dịch Vụ Pin Đi Kèm</h3>
                                        <div className="radio-group">
                                            <label className="radio-label">
                                                <input type="radio" name="battery" value="Included" onChange={handleBatteryChange} />
                                                <span className="radio-custom"></span>
                                                Bao gồm PIN
                                            </label>
                                            <label className="radio-label">
                                                <input type="radio" name="battery" value="NotIncluded" onChange={handleBatteryChange} />
                                                <span className="radio-custom"></span>
                                                Không bao gồm PIN
                                            </label>
                                            {error.battery && <div className="error-message">{error.battery}</div>}
                                        </div>
                                        {battery === 'NotIncluded' && (
                                            <div className="battery-info">
                                                <p><strong>Giá cọc Pin: 15.000.000 VNĐ</strong></p>
                                                <p>- Di chuyển dưới 1.500 km: 1.200.000 VNĐ/tháng</p>
                                                <p>- Di chuyển từ 1.500 km đến 3.000 km: 1.600.000 VNĐ/tháng</p>
                                                <p>- Di chuyển trên 3.000 km: 2.700.000 VNĐ/tháng</p>
                                                <p><strong>Phí thuê pin Quý khách vui lòng thanh toán khi đến Showroom làm thủ tục hợp đồng và nhận xe.</strong></p>
                                            </div>
                                        )}
                                    </>
                                )}
                                <p><strong>Giá xe:</strong> {displayPrice.toLocaleString()} VND</p>
                                <p className="vat-note">Giá xe đã bao gồm VAT</p>
                                <button className="next-button" onClick={nextStage}>Bước Tiếp Theo</button>
                            </div>
                        )}

                        {stage === 2 && (
                            <div>
                                <h3>Hãy nhập thông tin chủ xe và chọn showroom mà Quý khách muốn nhận xe.</h3>
                                <div className="car-owner-info">
                                    <label>
                                        Chủ sở hữu xe là:
                                        <div className="radio-group">
                                            <label className="radio-label">
                                                <input type="radio" name="ownerType" value="CaNhan" required />
                                                <span className="radio-custom"></span>
                                                Cá Nhân
                                            </label>
                                            <label className="radio-label">
                                                <input type="radio" name="ownerType" value="DoanhNghiep" required />
                                                <span className="radio-custom"></span>
                                                Doanh Nghiệp
                                            </label>
                                        </div>
                                    </label>
                                    {error.ownerType && <div className="error-message">{error.ownerType}</div>}
                                    <label>
                                        Họ và tên: <input type="text" name="name" required />
                                    </label>
                                    {error.name && <div className="error-message">{error.name}</div>}
                                    <label>
                                        Số điện thoại: <input type="tel" name="phone" required />
                                    </label>
                                    {error.phone && <div className="error-message">{error.phone}</div>}
                                    <label>
                                        Chọn giấy tờ:
                                        <select name="documentType" required>
                                            <option value="" disabled selected hidden>Chọn giấy tờ</option>
                                            <option value="CCCD">CCCD</option>
                                            <option value="HoChieu">Hộ chiếu</option>
                                        </select>
                                    </label>
                                    {error.documentType && <div className="error-message">{error.documentType}</div>}
                                    <label>
                                        Số CCCD/Hộ chiếu: <input type="text" name="documentNumber" required />
                                    </label>
                                    {error.documentNumber && <div className="error-message">{error.documentNumber}</div>}
                                    <label>
                                        Email: <input type="email" name="email" required />
                                    </label>
                                    {error.email && <div className="error-message">{error.email}</div>}
                                    <label>
                                        Tỉnh thành:
                                        <select name="province" onChange={(e) => {
                                            const province = e.target.value;
                                            const showroomSelect = document.querySelector('select[name="showroom"]');
                                            showroomSelect.innerHTML = '<option value="" disabled selected hidden>Chọn Showroom</option>';

                                            let showrooms = [];
                                            if (province === "Hà Nội") {
                                                showrooms = [
                                                    "Ba Đình", "Bắc Từ Liêm", "Cầu Giấy", "Đống Đa", "Hai Bà Trưng",
                                                    "Hoàn Kiếm", "Hoàng Mai", "Long Biên", "Nam Từ Liêm", "Tây Hồ",
                                                    "Thanh Xuân", "Hà Đông", "Sơn Tây", "Ba Vì", "Chương Mỹ", "Đan Phượng",
                                                    "Đông Anh", "Gia Lâm", "Hoài Đức", "Mê Linh", "Mỹ Đức",
                                                    "Phú Xuyên", "Phúc Thọ", "Quốc Oai", "Sóc Sơn", "Thạch Thất",
                                                    "Thanh Oai", "Thanh Trì", "Thường Tín", "Ứng Hòa"
                                                ].map(district => `VinFast ${district}`);
                                            } else if (province === "Hải Phòng") {
                                                showrooms = ["VinFast Âu Lạc Nguyễn Bỉnh Khiêm", "VinFast Âu Lạc Bạch Đằng"];
                                            } else if (province === "Tp Hồ Chí Minh") {
                                                showrooms = [
                                                    "Quận 1", "Quận 2", "Quận 3", "Quận 4", "Quận 5", "Quận 6",
                                                    "Quận 7", "Quận 8", "Quận 9", "Quận 10", "Quận 11", "Quận 12",
                                                    "Bình Tân", "Bình Thạnh", "Gò Vấp", "Phú Nhuận", "Tân Bình", "Tân Phú",
                                                    "Thủ Đức"
                                                ].map(district => `VinFast ${district}`);
                                            } else if (province === "Đà Nẵng") {
                                                showrooms = ["VinFast Thế hệ mới Đà Nẵng", "VinFast Hồng Quang Ngô Quyền"];
                                            } else if (province === "Cần Thơ") {
                                                showrooms = [
                                                    "VinFast Hồng Quang Cái Răng", "VinFast Sài Gòn Cửu Long Cần Thơ", "VinFast Hồng Quang Ninh Kiều"
                                                ];
                                            }

                                            showrooms.forEach(showroom => {
                                                showroomSelect.innerHTML += `<option value="${showroom}">${showroom}</option>`;
                                            });
                                        }} required>
                                            <option value="" disabled selected hidden>Chọn Tỉnh thành</option>
                                            <option value="Hà Nội">Hà Nội</option>
                                            <option value="Hải Phòng">Hải Phòng</option>
                                            <option value="Tp Hồ Chí Minh">Tp Hồ Chí Minh</option>
                                            <option value="Đà Nẵng">Đà Nẵng</option>
                                            <option value="Cần Thơ">Cần Thơ</option>
                                        </select>
                                    </label>
                                    {error.province && <div className="error-message">{error.province}</div>}
                                    <label>
                                        Showroom nhận xe:
                                        <select name="showroom" required>
                                            <option value="" disabled selected hidden>Chọn Showroom</option>
                                        </select>
                                    </label>
                                    {error.showroom && <div className="error-message">{error.showroom}</div>}
                                </div>
                                <p><strong>Giá xe:</strong> {displayPrice.toLocaleString()} VND</p>
                                <p className="vat-note">Giá xe đã bao gồm VAT</p>
                                <button className="next-button" onClick={nextStage}>Bước Tiếp Theo</button>
                            </div>
                        )}
                        {stage === 3 && (
                            <div>
                                <h3>Quý khách vui lòng kiểm tra lại thông tin đơn hàng và thực hiện thanh toán khoản đặt cọc cho xe</h3>
                                <div className="order-summary">
                                    <h3>THÔNG TIN ĐƠN HÀNG:</h3>
                                    <div className="car-info-summary">
                                        <h3>THÔNG TIN XE</h3>
                                        <p><strong>{car.MaXe}</strong></p>
                                        <p><strong>Mẫu xe:</strong> {version === 'NangCao' ? 'Nâng Cao' : 'Cơ Bản'}</p>
                                        {!isGasCar && (
                                            <p><strong>Dịch vụ pin đi kèm:</strong> {battery === 'Included' ? 'Bao gồm PIN' : 'Không bao gồm PIN'}</p>
                                        )}
                                        <p><strong>Giá:</strong> {displayPrice.toLocaleString()} VND (đã bao gồm VAT)</p>
                                        <p><strong>Cọc trước:</strong> 15.000.000 VND</p>
                                    </div>
                                    <div className="owner-info-summary">
                                        <h3>THÔNG TIN CHỦ XE</h3>
                                        <p><strong>Chủ xe:</strong> {document.querySelector('input[name="name"]')?.value || ''}</p>
                                        <p><strong>Email:</strong> {document.querySelector('input[name="email"]')?.value || ''}</p>
                                        <p><strong>Số điện thoại:</strong> {document.querySelector('input[name="phone"]')?.value || ''}</p>
                                        <p><strong>Số CCCD/Hộ chiếu:</strong> {document.querySelector('input[name="documentNumber"]')?.value || ''}</p>
                                    </div>
                                    <div className="showroom-info-summary">
                                        <h3>THÔNG TIN SHOWROOM</h3>
                                        <p><strong>Showroom nhận xe: </strong>{document.querySelector('select[name="showroom"]')?.value || ''}</p>
                                    </div>
                                    <button className="confirm-button" onClick={nextStage}>Xác Nhận Đặt Cọc</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CarBought;
