import React from 'react';
// import { Line } from 'react-chartjs-2'; // Import the Line chart from React Chart.js 2
// import { Chart as ChartJS, LinearScale, PointElement, LineElement, CategoryScale, Title } from 'chart.js'; // Import necessary components from Chart.js

// // Register components with Chart.js
// ChartJS.register(LinearScale, PointElement, LineElement, CategoryScale, Title);
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';

ChartJS.register(...registerables);

interface ChartProps {
  title: string;
}

// Sample data and options for the chart
const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'], // X-axis labels
  datasets: [
    {
      label: 'Active Users', // Legend label
      data: [65, 59, 80, 81, 56, 55, 40], // Data points
      fill: false,
      backgroundColor: 'rgba(0, 128, 0, 0.5)', // Light green background color for bars
      borderColor: 'rgba(0, 128, 0, 1)', 
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
      text: 'Chart Title', // Replace with dynamic title if needed
    },
  },
};

const LineChart: React.FC<ChartProps> = ({ title }) => (
  <section className="chart">
    <h3>{title}</h3>
    <Line data={data} options={options} /> {/* Render the line chart */}
  </section>
);

export default LineChart;
