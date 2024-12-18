import React from 'react';
import './Footer.css';
import { Link } from "react-router-dom";
import logo from '../../assets/Vinfast-logo-1.png'; // Đảm bảo bạn có logo VinFast trong thư mục assets

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section-1">
          <div className="footer-logo">
            <Link to="/">
              <img src={logo} alt="VinFast Logo" />
              <p>VINFAST</p>
            </Link>
          </div>
          <p className="footer-description">
            <span className="footer-detail-title">VinFast - Bước phát triển mới trong lĩnh vực xe hơi. Công ty TNHH Kinh doanh Thương mại và Dịch vụ VinFast</span>
          </p>
          <p className="footer-description">
            <span className="footer-detail-title">MST/MSDN:</span> <span className="footer-detail-info">0108926276 do Sở KHĐT TP Hà Nội cấp lần đầu ngày 01/10/2019 và các lần thay đổi tiếp theo.</span>
          </p>
          <p className="footer-description">
            <span className="footer-detail-title">Địa chỉ trụ sở chính:</span> <span className="footer-detail-info">Số 7, đường Bằng Lăng 1, Khu đô thị Vinhomes Riverside, Phường Việt Hưng, Quận Long Biên, Thành phố Hà Nội, Việt Nam</span>
          </p>
        </div>
        <div className="footer-section">
          <h3>Về VinFast</h3>
          <ul className="footer-links">
            <li><a href="/about">Giới thiệu</a></li>
            <li><a href="/news">Tin tức</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Hỗ trợ khách hàng</h3>
          <ul className="footer-links">
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/support">Trung tâm hỗ trợ</a></li>
            <li><a href="/privacy">Chính sách bảo mật</a></li>
            <li><a href="/return-policy">Chính sách hoàn trả</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Liên hệ</h3>
          <p>Email: support@vinfast.vn</p>
          <p>Hotline: 1900 23 23 23</p>
          <div className="social-media">
            <a href="https://www.facebook.com/vinfast"><i className="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com/vinfast"><i className="fab fa-twitter"></i></a>
            <a href="https://www.instagram.com/vinfast"><i className="fab fa-instagram"></i></a>
            <a href="https://www.youtube.com/vinfast"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
