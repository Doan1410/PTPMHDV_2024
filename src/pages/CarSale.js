import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CarSale.css';
import carData from '../components/Compares/CarData';
import WelcomeSection from '../components/CarSale/WelcomeSection';
import CarList from '../components/CarSale/CarList';
import ConsultationSection from '../components/CarSale/ConsultationSection';
import Menu from "../components/Menus/Menu";

const CarSale = () => {
  const navigate = useNavigate();
  const electricCars = carData.filter(car => car.KieuXe === 'Điện');
  const petrolCars = carData.filter(car => car.KieuXe === 'Xăng');

  const handleBuyClick = (car) => {
    navigate(`/buy/${encodeURIComponent(car.MaXe).replace(/%20/g, '')}`, { state: { car } });
  };

  return (
    <div>
      <Menu />
      <div>
        <WelcomeSection />
        <section id="models">
          <h2>Mẫu Xe Điện</h2>
          <CarList cars={electricCars} handleBuyClick={handleBuyClick} />
          <h2>Mẫu Xe Xăng</h2>
          <CarList cars={petrolCars} handleBuyClick={handleBuyClick} />
        </section>
        <ConsultationSection />
      </div>
    </div>

  );
};

export default CarSale;
