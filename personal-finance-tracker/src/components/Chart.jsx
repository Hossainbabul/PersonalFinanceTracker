import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const data = {
    labels: ['Income', 'Expenses'],
    datasets: [
      {
        label: 'Distribution',
        data: [5230, 2750], // Example data
        backgroundColor: [
          'rgba(34, 197, 94, 0.7)', // Green for Income
          'rgba(239, 68, 68, 0.7)',  // Red for Expenses
        ],
        borderColor: [
          'rgba(22, 163, 74, 1)',
          'rgba(220, 38, 38, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Income vs. Expenses',
        font: {
          size: 16
        }
      },
    },
  };

  return <div className="relative h-64 w-full"><Doughnut data={data} options={options} /></div>;
};

export default DoughnutChart;