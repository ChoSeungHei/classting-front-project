import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export const Chart = () => {
  const [answer, setAnswer] = useState(0);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: '정오답 비율',
      },
    },
  };

  const labels = ['Score'];
  useEffect(() => {
    setAnswer(Number(sessionStorage.getItem('answer')));
  }, []);

  const data = {
    labels,
    datasets: [
      {
        label: '정답',
        data: [answer],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: '오답',
        data: [10 - answer],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return (
    <div style={{ width: '70%' }}>
      <Bar options={options} data={data} />
    </div>
  );
};
