import React from 'react';

const ConsultationSection = () => {
  return (
    <section id="consultation">
      <h2>Đăng Kí Tư Vấn Trực Tuyến</h2>
      <p className="sub-heading">Đăng ký ngay hôm nay để nhận thông tin chính thức và tư vấn từ VinFast</p>
      <form>
        <label htmlFor="name">Tên:</label>
        <input type="text" id="name" name="name" className="section-input" required />
        <label htmlFor="phone">Số điện thoại:</label>
        <input type="tel" id="phone" name="phone" className="section-input" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" className="section-input" required />
        <label htmlFor="car">Dòng xe quan tâm:</label>
        <div id="car" name="car" className="radio-group-container">
          <fieldset className="radio-group">
            <label className="car-option">
              <input type="radio" name="car" value="VF 3" /> VF 3
            </label>
            <label className="car-option">
              <input type="radio" name="car" value="VF 5" /> VF 5
            </label>
            <label className="car-option">
              <input type="radio" name="car" value="VF 6" /> VF 6
            </label>
            <label className="car-option">
              <input type="radio" name="car" value="VF 7" /> VF 7
            </label>
            <label className="car-option">
              <input type="radio" name="car" value="VF 8" /> VF 8
            </label>
            <label className="car-option">
              <input type="radio" name="car" value="VF 9" /> VF 9
            </label>
            <label className="car-option">
              <input type="radio" name="car" value="VF e34" /> VF e34
            </label>
            <label className="car-option">
              <input type="radio" name="car" value="FADIL" /> FADIL
            </label>
            <label className="car-option">
              <input type="radio" name="car" value="LUX A2.0" /> LUX A2.0
            </label>
            <label className="car-option">
              <input type="radio" name="car" value="LUX SA2.0" /> LUX SA2.0
            </label>
          </fieldset>
        </div>
        <button type="submit">Đăng Kí</button>
      </form>
    </section>
  );
};

export default ConsultationSection;
