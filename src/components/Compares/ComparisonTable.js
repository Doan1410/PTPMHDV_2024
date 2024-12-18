import React from "react";
import carData from "./CarData"; // Import dữ liệu xe

function ComparisonTable({ selectedCar }) {
  const car1Details = carData.find(car => car.MaXe === selectedCar.car1);
  const car2Details = carData.find(car => car.MaXe === selectedCar.car2);
  const car3Details = carData.find(car => car.MaXe === selectedCar.car3);

  const specs = [
    ["Động cơ", "DongCo"],
    ["Công suất tối đa (km/h)", "TocDoToiDa"],
    ["Số chỗ ngồi", "SoGhe"],
    ["Thời gian tăng tốc (giây)", "ThoiGianTangToc"],
    ["Dung tích pin/xăng", "DungTichPin_Xang"],
    ["Tầm di chuyển (km)", "TamDiChuyen"],
    ["Tiện nghi", "TienNghi"],
    ["Giá (VND)", "Gia"]
  ];

  return (
    <div className="comparison-table">
      <table>
        <thead>
          <tr>
            <th>Tính năng</th>
            <th>{car1Details?.MaXe}</th>
            <th>{car2Details?.MaXe}</th>
            <th>{car3Details?.MaXe}</th>
          </tr>
        </thead>
        <tbody>
          {specs.map(([label, key]) => (
            <tr key={key}>
              <td>{label}</td>
              <td>{car1Details?.[key] || "N/A"}</td>
              <td>{car2Details?.[key] || "N/A"}</td>
              <td>{car3Details?.[key] || "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ComparisonTable;
