import React from 'react';
import ReactDOM from 'react-dom/client';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Slider1 from './components/Sliders/Slider1';
import Menu from "./components/Menus/Menu";
import Footer from "./components/Footers/Footer";
import './index.css';
import Login from './pages/Login';
import Slider2 from './components/Sliders/Slider2';
import Compare from './pages/Compare';
import CarSale from './pages/CarSale';
import CarBought from './pages/CarBought';
import PaymentProcess from './pages/PaymentProcess';
import CostEstimate from './pages/CostEstimate';
import HomepageBlog from './components/Blogs/Homepage-blog';
import VF3Details from './pages/VF3Details';
import VFE34Details from './pages/VFE34Details';
import VF5Details from './pages/VF5Details';
import VF6Details from './pages/VF6Details';
import VF7Details from './pages/VF7Details';
import VF8Details from './pages/VF8Details';
import VF9Details from './pages/VF9Details';
import FAQPage from './pages/FAQPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <Menu />
            <div className="slider-container slider-1">
              <Slider1 /> 
            </div>
            <HomepageBlog /> 
            <div className="slider-container slider-2">
              <Slider2 /> 
            </div>
            {/* <HomepageBlog />  */}
            <Footer />
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/car/vf3" element={<VF3Details />} />
        <Route path="/car/vfe34" element={<VFE34Details />} />
        <Route path="/car/vf5" element={<VF5Details />} />
        <Route path="/car/vf6" element={<VF6Details />} />
        <Route path="/car/vf7" element={<VF7Details />} />
        <Route path="/car/vf8" element={<VF8Details />} />
        <Route path="/car/vf9" element={<VF9Details />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/cars" element={<CarSale />} /> {/* Thêm đường dẫn /cars */}
        <Route path="/buy/:carId" element={<CarBought />} /> {/* Cập nhật đường dẫn cho trang mua xe mới */}
        <Route path="/payment-process" element={<PaymentProcess />} /> {/* Thêm đường dẫn cho PaymentProcess */}
        <Route path='/cost-estimate' element={<CostEstimate />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
