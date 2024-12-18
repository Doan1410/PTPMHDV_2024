import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import carData from '../components/Compares/CarData';
import '../styles/CostEstimate.css';
import Menu from "../components/Menus/Menu";

const CostEstimate = () => {
    const [selectedCar, setSelectedCar] = useState('');
    const [selectedVersion, setSelectedVersion] = useState('basic');
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedPayment, setSelectedPayment] = useState('Trả thẳng');
    const [carImage, setCarImage] = useState('https://shop.vinfastauto.com/on/demandware.static/Sites-app_vinfast_vn-Site/-/default/dwa764c929/images/logo-xl.png');
    const [carPrice, setCarPrice] = useState(0);
    const [selectedBatteryOption, setSelectedBatteryOption] = useState('');
    const [totalCost, setTotalCost] = useState(0);
    const navigate = useNavigate();

    const additionalCosts = useMemo(() => ({
        discount: 0,
        registrationFee: 0,
        roadMaintenanceFee: 1560000,
        civilLiabilityInsurance: 480700,
        licensePlateFee: 1000000,
        inspectionFee: 340000,
        otherFees: 0
    }), []);

    useEffect(() => {
        if (selectedCar) {
            const total = carPrice + additionalCosts.discount + additionalCosts.registrationFee + additionalCosts.roadMaintenanceFee + additionalCosts.civilLiabilityInsurance + additionalCosts.licensePlateFee + additionalCosts.inspectionFee + additionalCosts.otherFees;
            setTotalCost(total);
        } else {
            setTotalCost(0);
        }
    }, [selectedCar, carPrice, additionalCosts]);

    const handleCarChange = (event) => {
        const selectedCar = event.target.value;
        setSelectedCar(selectedCar);
        const car = carData.find(car => car.MaXe === selectedCar);
        if (car) {
            setCarImage(selectedVersion === 'advanced' ? car.HinhAnhKhac : car.HinhAnh);
            setCarPrice(car.Gia);
            setSelectedBatteryOption('');
        } else {
            setCarImage('https://shop.vinfastauto.com/on/demandware.static/Sites-app_vinfast_vn-Site/-/default/dwa764c929/images/logo-xl.png');
            setCarPrice(0);
            setSelectedBatteryOption('');
        }
    };

    const handleVersionChange = (event) => {
        const selectedVersion = event.target.value;
        setSelectedVersion(selectedVersion);
        const car = carData.find(car => car.MaXe === selectedCar);
        if (car) {
            setCarImage(selectedVersion === 'advanced' ? car.HinhAnhKhac : car.HinhAnh);
        } else {
            setCarImage('https://shop.vinfastauto.com/on/demandware.static/Sites-app_vinfast_vn-Site/-/default/dwa764c929/images/logo-xl.png');
        }
    };

    const handleCityChange = (event) => {
        setSelectedCity(event.target.value);
    };

    const handlePaymentChange = (event) => {
        setSelectedPayment(event.target.value);
    };

    const handleBatteryOptionChange = (event) => {
        setSelectedBatteryOption(event.target.value);
    };

    const handleOrderClick = () => {
        if (selectedCar) {
            const carDetails = carData.find(car => car.MaXe === selectedCar);
            navigate(`/buy/${encodeURIComponent(carDetails.MaXe).replace(/%20/g, '')}`, { state: { car: carDetails } });
        } else {
            alert('Vui lòng chọn một mẫu xe để đặt mua.');
        }
    };

    const handleDetailsClick = () => {
        if (selectedCar) {
            navigate(`/car/${encodeURIComponent(selectedCar).replace(/%20/g, '')}`); // Điều hướng đến trang chi tiết xe dựa trên mã xe
        } else {
            alert('Vui lòng chọn một mẫu xe để xem chi tiết.');
        }
    };

    return (
        <div>
            <Menu />
            <div class="ce-container">
                <p id='title'>Dự toán chi phí lăn bánh</p>
                <div className="container">
                    <div className="image-container">
                        {selectedCar && (
                            <div className="car-info">
                                <p>{`${selectedCar} - ${selectedVersion === 'advanced' ? 'Nâng cao' : 'Cơ bản'}`}</p>
                            </div>
                        )}
                        <img src={carImage} alt="Vehicle" />
                    </div>
                    <div className="form-container">
                        <div className="form-group">
                            <label htmlFor="carModel">Mẫu xe</label>
                            <select id="carModel" value={selectedCar} onChange={handleCarChange}>
                                <option value="" disabled selected hidden>Lựa chọn</option>
                                {carData.map(car => (
                                    <option key={car.MaXe} value={car.MaXe}>{car.MaXe}</option>
                                ))}
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="carVersion">Phiên bản</label>
                            <select id="carVersion" value={selectedVersion} onChange={handleVersionChange}>
                                <option value="basic">Cơ bản</option>
                                <option value="advanced">Nâng cao</option>
                            </select>
                        </div>

                        {selectedCar && carData.find(car => car.MaXe === selectedCar).KieuXe === 'Điện' && (
                            <div className="form-group">
                                <label htmlFor="batteryOption">Pin</label>
                                <select id="batteryOption" value={selectedBatteryOption} onChange={handleBatteryOptionChange}>
                                    <option value="" disabled selected hidden>Lựa chọn</option>
                                    <option value="included">Bao gồm pin</option>
                                    <option value="excluded">Không bao gồm pin</option>
                                </select>
                            </div>
                        )}

                        <div className="form-group">
                            <label htmlFor="city">Tỉnh/Thành phố</label>
                            <select id="city" value={selectedCity} onChange={handleCityChange}>
                                <option value="" disabled selected hidden>Lựa chọn</option>
                                <option value="Hà Nội">Hà Nội</option>
                                <option value="Hồ Chí Minh">Hồ Chí Minh</option>
                                <option value="Đà Nẵng">Đà Nẵng</option>
                                <option value="Hải Phòng">Hải Phòng</option>
                                <option value="Cần Thơ">Cần Thơ</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="paymentMethod">Phương thức thanh toán</label>
                            <select id="paymentMethod" value={selectedPayment} onChange={handlePaymentChange}>
                                <option value="Trả thẳng">Trả thẳng</option>
                            </select>
                        </div>
                        <br></br>
                        <div className="price-info">
                            <p><strong>Giá công bố:</strong> {carPrice ? carPrice.toLocaleString() : '0'} đ</p>
                            <p><strong>Ưu đãi:</strong> {carPrice ? additionalCosts.discount.toLocaleString() : '0'} đ</p>
                            <p><strong>Phí trước bạ:</strong> {carPrice ? additionalCosts.registrationFee.toLocaleString() : '0'} đ</p>
                            <p><strong>Phí bảo trì đường bộ (1 năm):</strong> {carPrice ? additionalCosts.roadMaintenanceFee.toLocaleString() : '0'} đ</p>
                            <p><strong>Bảo hiểm trách nhiệm dân sự (1 năm):</strong> {carPrice ? additionalCosts.civilLiabilityInsurance.toLocaleString() : '0'} đ</p>
                            <p><strong>Phí đăng ký biển số:</strong> {carPrice ? additionalCosts.licensePlateFee.toLocaleString() : '0'} đ</p>
                            <p><strong>Phí đăng kiểm:</strong> {carPrice ? additionalCosts.inspectionFee.toLocaleString() : '0'} đ</p>
                            <p><strong>Phí khác:</strong> {carPrice ? additionalCosts.otherFees.toLocaleString() : '0'} đ</p>
                            <br></br>
                            <div className="total-cost">
                                <p><strong>Chi phí lăn bánh dự kiến:</strong></p>
                                <p style={{ fontSize: '32px', fontWeight: 'bold' }}>{carPrice ? totalCost.toLocaleString() : '0'} đ</p>
                            </div>
                        </div>
                        <br></br>
                        <div className="button-group">
                            <button className="order-button" onClick={handleOrderClick}>Đặt mua</button>
                            <button className="details-button" onClick={handleDetailsClick}>Xem chi tiết</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CostEstimate;
