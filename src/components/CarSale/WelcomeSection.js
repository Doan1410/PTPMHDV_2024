import React from 'react';

const WelcomeSection = () => {
  return (
    <section id="home">
      <h1>Chào mừng đến với VinFast</h1>
      <p>Khám phá các mẫu xe chất lượng cao của chúng tôi và tìm chiếc xe hoàn hảo cho bạn.</p>
      <div className="welcome-content">
        <div className="welcome-item">
          <h3>Tầm nhìn</h3>
          <p>Trở thành thương hiệu xe điện thông minh thúc đẩy mạnh mẽ cuộc cách mạng xe điện toàn cầu.</p>
        </div>
        <div className="welcome-item">
          <h3>Sứ mệnh</h3>
          <p>Vì một tương lai xanh cho mọi người.</p>
        </div>
        <div className="welcome-item">
          <h3>Triết lý thương hiệu</h3>
          <p>Đặt khách hàng làm trọng tâm, VinFast không ngừng sáng tạo ra các sản phẩm đẳng cấp và trải nghiệm xuất sắc cho mọi người.</p>
        </div>
        <div className="welcome-item">
          <h3>Giá trị cốt lõi</h3>
          <p>Sản phẩm đẳng cấp, giá tốt, chính sách hậu mãi vượt trội.</p>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
