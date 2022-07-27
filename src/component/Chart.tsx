import React from 'react';
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

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['Score'];
const answer = Number(sessionStorage.getItem('answer'));
export const data = {
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

export const Chart = () => {
  return <Bar options={options} data={data} />;
};
