import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import logo from "../../assets/Vinfast-logo-1.png";
import vf3 from "../../assets/vf-3-2.png";
import vf5 from "../../assets/vf-5.png";
import vf6 from "../../assets/vf-6.png";
import vf7 from "../../assets/vf-7.png";
import vf8 from "../../assets/VF8.png";
import vf9 from "../../assets/vf-9.png";
import vf34 from "../../assets/vf-e34.png";

const carModels = [
  { name: "VF3", image: vf3, details: "Compact car with modern design", link: "/car/vf3" },
  { name: "VF e34", image: vf34, details: "Electric compact SUV for the future", link: "/car/vfe34" },
  { name: "VF5 Plus", image: vf5, details: "Luxurious sedan with advanced features", link: "/car/vf5" },
  { name: "VF6", image: vf6, details: "Premium SUV for every journey", link: "/car/vf6" },
  { name: "VF7", image: vf7, details: "Stylish midsize SUV with smart technology", link: "/car/vf7" },
  { name: "VF8", image: vf8, details: "High-performance SUV with a focus on comfort", link: "/car/vf8" },
  { name: "VF9", image: vf9, details: "Luxury full-size SUV with spacious interior", link: "/car/vf9" },
];



const menus = [
  { name: "Ô tô", submenu: carModels },
  // { name: "Xe máy điện", submenu: bikeModels },
  // { name: "Motorsport" },
];

const utilities = [
  { name: "So sánh xe", link: "/compare" },
  { name: "Dự tính chi phí lăn bánh", link: "/cost-estimate" },
];

const shopping = [
  { name: "Ô tô", link: "/cars" }, // Điều hướng tới /cars
  // { name: "Xe máy", link: "/motorcycles" },
];

const support = [
  { name: "Câu hỏi thường gặp", link: "/faq" },
];

const Menu = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeItem, setActiveItem] = useState(null);
  const [showToolsMenu, setShowToolsMenu] = useState(false);

  const handleClickMenu = (index) => {
    if (activeMenu === index) {
      setActiveMenu(null);
    } else {
      setActiveMenu(index);
      if (showToolsMenu) {
        setShowToolsMenu(false);
      }
    }
    setActiveItem(null);
  };

  const handleMouseEnterItem = (index) => {
    setActiveItem(index);
  };

  const handleMouseLeaveItem = () => {
    setActiveItem(null);
  };

  const toggleToolsMenu = () => {
    setShowToolsMenu(!showToolsMenu);
    if (activeMenu !== null) {
      setActiveMenu(null);
      setActiveItem(null);
    }
  };

  return (
    <header className="menu-container">
      <div className="menu-logo">
        <Link to="/">
          <img src={logo} alt="VinFast Logo" />
          <p>VINFAST</p>
        </Link>
      </div>

      <nav className="menu">
        <ul className="menu-list">
          {menus.map((menu, index) => (
            <li
              key={index}
              className={`menu-item ${activeMenu === index ? "active" : ""}`}
              onClick={() => handleClickMenu(index)}
            >
              {menu.name}
              {menu.submenu && (
                <ul className={`dropdown-menu ${activeMenu === index ? "show" : ""}`}>
                  {menu.submenu.map((item, subIndex) => (
                    <li
                      key={subIndex}
                      className="dropdown-item"
                      onMouseEnter={() => handleMouseEnterItem(subIndex)}
                      onMouseLeave={handleMouseLeaveItem}
                    >
                      <Link to={item.link} className="dropdown-link">
                        {item.name}
                        {activeItem === subIndex && (
                          <div className="dropdown-details">
                            <img src={item.image} alt={item.name} />
                            <p>{item.details}</p>
                          </div>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <div className="menu-tools">
        <ul className="menu-secondary">
          <li className="menu-secondary-item">
            <Link to="/login">Đăng nhập</Link>
          </li>
          <li className="menu-secondary-item">
            <Link to="/news">Tin tức</Link>
          </li>
        </ul>
        <input type="text" placeholder="Tìm kiếm..." className="search-box" />
        <button className="menu-btn" onClick={toggleToolsMenu}>{showToolsMenu ? '✖' : '☰'}</button>
        {showToolsMenu && (
          <div className="tools-menu">
            <ul className="tools-list">
              <li className="tools-item">
                <span>Tiện ích</span>
                <ul className="tools-submenu">
                  {utilities.map((tool, index) => (
                    <li key={index} className="tools-subitem">
                      <Link to={tool.link}>{tool.name}</Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="tools-item">
                <span>Mua sắm</span>
                <ul className="tools-submenu">
                  {shopping.map((tool, index) => (
                    <li key={index} className="tools-subitem">
                      <Link to={tool.link}>{tool.name}</Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="tools-item">
                <span>Tư vấn</span>
                <ul className="tools-submenu">
                  {support.map((tool, index) => (
                    <li key={index} className="tools-subitem">
                      <Link to={tool.link}>{tool.name}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Menu;
