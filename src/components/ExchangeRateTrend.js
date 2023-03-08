import React from "react";
import Chart from "chart.js/auto";
import "./Comparison.css"
import { Line } from "react-chartjs-2";

export default function ExchangeRateTrend () {
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'USD',
        data: [1.23, 1.22, 1.20, 1.18, 1.16, 1.14, 1.12, 1.10, 1.08, 1.06, 1.04, 1.02],
        borderColor: 'rgba(255, 0, 0, 1)',
        fill: false,
      },
      {
        label: 'EUR',
        data: [0.90, 0.92, 0.94, 0.96, 0.98, 1.00, 1.02, 1.04, 1.06, 1.08, 1.10, 1.12],
        borderColor: 'rgba(0, 255, 0, 1)',
        fill: false,
      },
      {
        label: 'GBP',
        data: [0.80, 0.82, 0.84, 0.86, 0.88, 0.90, 0.92, 0.94, 0.96, 0.98, 1.00, 1.02],
        borderColor: 'rgba(0, 0, 255, 1)',
        fill: false,
      },
    ],
  };
  

  
  return (
    <div className="chartContainer" style={{width: "800px", height:"500px", backgroundColor:'white', marginTop:"50px"}} >
      <Line data={data} />
    </div>
  );
};


