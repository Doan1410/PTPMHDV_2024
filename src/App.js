import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menus/Menu'; // Đường dẫn mới đến Menu
import Slider from './components/sliders/Slider'; // Đường dẫn mới đến Slider
import Login from './pages/Login';
import Compare from './pages/Compare';
import CarSale from './pages/CarSale';
import CarBought from './pages/CarBought';
import PaymentProcess from './pages/PaymentProcess';
import CostEstimate from './pages/CostEstimate';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Menu />
        <Slider />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/buy/:carId" element={<CarBought />} /> {/* Cập nhật đường dẫn cho trang mua xe mới */}
          <Route path="/payment-process" element={<PaymentProcess />} />
          <Route path="/cars" element={<CarSale />} /> {/* Thêm đường dẫn /cars */}
          <Route path='/cost-estimate' element={<CostEstimate />}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
