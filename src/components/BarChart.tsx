import React from 'react';
// import { Bar } from 'react-chartjs-2'; // Import the Bar chart from React Chart.js 2
// import { Chart as ChartJS, LinearScale, BarElement, CategoryScale, Title } from 'chart.js'; // Import necessary components from Chart.js

// // Register components with Chart.js
// ChartJS.register(LinearScale, BarElement, CategoryScale, Title);

import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';

ChartJS.register(...registerables);

interface BarChartProps {
  title: string;
}

// Sample data and options for the bar chart
const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'], // X-axis labels
  datasets: [
    {
      label: 'Active Users', // Legend label
      data: [65, 59, 80, 81, 56, 55, 40], // Data points
      backgroundColor: 'rgba(0, 128, 0, 0.5)', // Light green background color for bars
      borderColor: 'rgba(0, 128, 0, 1)',  // Border color for bars
      borderWidth: 1, // Border width for bars
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
    },
    title: {
      display: true,
      text: 'Bar Chart Title', // Replace with dynamic title if needed
    },
  },
};

const BarChart: React.FC<BarChartProps> = ({ title }) => (
  <section className="chart">
    <h3>{title}</h3>
    <Bar data={data} options={options} /> {/* Render the bar chart */}
  </section>
);

export default BarChart;
