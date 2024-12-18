import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/PaymentProcess.css';
import Menu from "../components/Menus/Menu";

const PaymentProcess = () => {
    const location = useLocation();
    const {
        car
    } = location.state || {};

    const orderID = Math.random().toString(36).substr(2, 12).toUpperCase(); // Sinh mã đơn hàng ngẫu nhiên

    // Tính toán thời gian giới hạn thanh toán là sau 12 tiếng kể từ thời điểm hiện tại
    const currentDate = new Date();
    const paymentDeadline = new Date(currentDate.getTime() + 12 * 60 * 60 * 1000); // Thêm 12 tiếng
    const deadlineHours = paymentDeadline.getHours().toString().padStart(2, '0');
    const deadlineMinutes = paymentDeadline.getMinutes().toString().padStart(2, '0');
    const deadlineDay = paymentDeadline.getDate().toString().padStart(2, '0');
    const deadlineMonth = (paymentDeadline.getMonth() + 1).toString().padStart(2, '0'); // Tháng bắt đầu từ 0
    const deadlineYear = paymentDeadline.getFullYear();

    return (
        <div>
            <Menu/>
            <div className="payment-process">
                <main className="payment-content">
                    <h2>Xử lý thanh toán đặt cọc</h2>
                    <p>Cảm ơn Quý khách đã đặt mua xe VinFast {car.MaXe}.</p>
                    <p><strong>Mã đơn hàng:</strong> {orderID}</p>
                    <p>Quý khách vui lòng thanh toán cho đơn hàng trước {deadlineHours}:{deadlineMinutes} ngày {deadlineDay}/{deadlineMonth}/{deadlineYear} theo thông tin dưới đây:</p>
                    <div className="payment-details">
                        <p><strong>Ngân hàng:</strong> Ngân hàng Đầu tư và Phát triển Việt Nam BIDV</p>
                        <p><strong>Số tài khoản:</strong> 9630630001306894</p>
                        <p><strong>Tên tài khoản:</strong> CTY TNHH KINH DOANH TM VA DV VINFAST</p>
                        <p><strong>Số tiền:</strong> 15.000.000 VNĐ</p>
                    </div>
                    <div className="payment-qr">
                        <p>Hoặc quét mã</p>
                        <img src="https://vov.vn/sites/default/files/styles/large/public/2021-03/anh_02.png" alt="QR Code" className="qr-code" /> {/* Sử dụng link mã QR bạn cung cấp */}
                    </div>
                    <p className="payment-note">Nếu VinFast không nhận được khoản thanh toán sau thời gian trên, đơn hàng của Quý khách sẽ được chuyển sang trạng thái thanh toán không thành công.</p>
                    <img src={car.HinhAnh} alt="VinFast Car" className="car-image" />
                </main>
            </div>
        </div>
    );
};

export default PaymentProcess;
