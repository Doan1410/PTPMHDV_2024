import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import ComparisonSection from "../components/Compares/ComparisonSection";
import CarDetail from "../components/Compares/CarDetail";
import Footer from '../components/Footers/Footer';
import "../styles/Compare.css";
import Menu from "../components/Menus/Menu";

function Compare() {
  const location = useLocation();

  useEffect(() => {
    document.body.classList.add("compare-page");
    return () => {
      document.body.classList.remove("compare-page");
    };
  }, [location]);

  return (
    <div>
      <Menu/>
      <div className="app-container">
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="fade" timeout={800}>
            <Routes location={location}>
              <Route path="/" element={<ComparisonSection />} />
              <Route path="/car/:carId" element={<CarDetail />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </div>
      <Footer />
    </div>
  );
}
function NotFound() {
  return <div>Trang không tồn tại.</div>;
}
export default Compare;
