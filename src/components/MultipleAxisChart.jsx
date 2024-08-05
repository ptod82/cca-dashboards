import { Box } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { useRef } from "react";
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler 
);




export default function MultipleAxis({ data }) {

  const options = {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    scales: {
      x: { 
        type: 'category',
        labels: data.labels,
        grid: {
          display: false, 
        },
      
      },
      'y-axis-2': {
        type: 'linear',
        position: 'right',
        title: {
          display: true,
          text: '%', 

        },
        min: 0, 
      },
      'y-axis-1': {
        type: 'linear',
        position: 'left',
        title: {
          display: true,
          text: 'million USD',
        },
        min: 0, 
       
      }
    },
    
    animation: {
      duration: 0
    },
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          padding: 20,
          usePointStyle: true,
          fontSize: 100,
        }
      },
      tooltip: {
      callbacks: {
        label: function(context) {
          const label = context.dataset.label || '';
          const value = context.parsed.y.toLocaleString() ;
          const unit = context.dataset.unit || '';
          
          return `${label} ${value} ${unit}`;
        },
        labelTextColor: function(context) {
          return '#000';
        }, 
        footer: function(context) {
          const flagDescription = context[0]?.dataset?.flagDescription || '';
          return flagDescription ? `${flagDescription}` : '';
        },
      }, 
      backgroundColor: '#f1f1f1',
      titleColor: "#000",
      footerColor: "#333",
      footerFont: { weight: 'normal' }, 
      borderColor: "#ccc", 
      borderWidth: "1", 
      },
      title: {
        display: false,
      },
    },
  };

  const ref = useRef(null);

  return (
    <Box ref={ref} className='max-chart-height'>
      <Line options={options} data={{
        labels: data.labels,
        datasets: data.datasets
      }} />
    </Box>
  );
}
