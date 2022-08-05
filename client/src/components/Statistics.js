import React, { useEffect, useState } from 'react';
import './statistics.css';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['봄 웜', '여름 쿨', '가을 웜', '겨울 쿨'],
  datasets: [
    {
      data: [10.9, 34.5, 34.6, 20],
      backgroundColor: [
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)'
      ]
    }
  ]
};

function Statistics () {
  return (
    <>
      <div className='doughnut-chart'>
        <Doughnut data={data} />
      </div>
    </>
  );
}

export default Statistics;
