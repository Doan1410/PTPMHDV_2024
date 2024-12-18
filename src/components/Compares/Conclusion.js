import React from "react";
import carData from "./CarData"; // Import dữ liệu xe

function Conclusion({ selectedCar }) {
  if (!selectedCar.car1 && !selectedCar.car2 && !selectedCar.car3) {
    // Nếu không có xe nào được chọn, không hiển thị phần kết luận
    return null;
  }

  const carDetails = {
    car1: carData.find(car => car.MaXe === selectedCar.car1),
    car2: carData.find(car => car.MaXe === selectedCar.car2),
    car3: carData.find(car => car.MaXe === selectedCar.car3)
  };

  const compareSpec = (spec, cars) => {
    const values = cars.map(car => car[spec]);
    return {
      highest: Math.max(...values),
      lowest: Math.min(...values)
    };
  };

  const getStrengthsAndWeaknesses = (car, specComparison) => {
    if (!car) return { strengths: [], weaknesses: [], common: [] };

    const strengths = [];
    const weaknesses = [];
    const common = [];

    if (car.TocDoToiDa) {
      if (car.TocDoToiDa === specComparison.TocDoToiDa.highest) {
        strengths.push("Công suất tối đa cao nhất");
      } else if (car.TocDoToiDa === specComparison.TocDoToiDa.lowest) {
        weaknesses.push("Công suất tối đa thấp nhất");
      } else {
        common.push("Công suất tối đa ở mức trung bình");
      }
    }

    if (car.ThoiGianTangToc) {
      if (car.ThoiGianTangToc === specComparison.ThoiGianTangToc.lowest) {
        strengths.push("Thời gian tăng tốc nhanh nhất");
      } else if (car.ThoiGianTangToc === specComparison.ThoiGianTangToc.highest) {
        weaknesses.push("Thời gian tăng tốc chậm nhất");
      } else {
        common.push("Thời gian tăng tốc ở mức trung bình");
      }
    }

    if (car.TamDiChuyen) {
      if (car.TamDiChuyen === specComparison.TamDiChuyen.highest) {
        strengths.push("Tầm di chuyển dài nhất");
      } else if (car.TamDiChuyen === specComparison.TamDiChuyen.lowest) {
        weaknesses.push("Tầm di chuyển ngắn nhất");
      } else {
        common.push("Tầm di chuyển ở mức trung bình");
      }
    }

    if (car.TienNghi) strengths.push("Nhiều tiện nghi");

    if (car.Gia) {
      if (car.Gia === specComparison.Gia.lowest) {
        strengths.push("Giá cả hợp lý nhất");
      } else if (car.Gia === specComparison.Gia.highest) {
        weaknesses.push("Giá cao nhất");
      } else {
        common.push("Giá ở mức trung bình");
      }
    }

    return { strengths, weaknesses, common };
  };

  const specsToCompare = ['TocDoToiDa', 'ThoiGianTangToc', 'TamDiChuyen', 'Gia'];
  const specComparison = {};
  specsToCompare.forEach(spec => {
    specComparison[spec] = compareSpec(spec, Object.values(carDetails).filter(car => car));
  });

  return (
    <div className="conclusion">
      <h3>Kết luận</h3>
      <p>Dưới đây là một số gợi ý dựa trên các xe mà bạn đã chọn:</p>
      <ul>
        {Object.entries(carDetails).map(([key, car]) => (
          car && (
            <li key={key}>
              <strong>{car.MaXe}:</strong>
              <ul>
                {getStrengthsAndWeaknesses(car, specComparison).strengths.map((strength, index) => (
                  <li key={`strength-${index}`} className="strength">{strength}</li>
                ))}
                {getStrengthsAndWeaknesses(car, specComparison).weaknesses.map((weakness, index) => (
                  <li key={`weakness-${index}`} className="weakness"><span>{weakness}</span></li>
                ))}
                {getStrengthsAndWeaknesses(car, specComparison).common.map((common, index) => (
                  <li key={`common-${index}`} className="common">{common}</li>
                ))}
              </ul>
            </li>
          )
        ))}
      </ul>
      <p>Chọn xe phù hợp nhất với nhu cầu và sở thích của bạn!</p>
    </div>
  );
}

export default Conclusion;
