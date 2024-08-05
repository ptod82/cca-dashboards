import { Box } from "@mui/material";
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
import { useRef } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);



export default function BarChartStacked({ data }) {  
  const options = {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        title: {
          display: true,
          text: data.info.Unit
        }
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
          const unit = data.info.Unit || '';
          
          return `${label} ${value} ${unit}`;
        },
        labelTextColor: function(context) {
          return '#000';
        }, 
        footer: function() {
          return data.info["Flag Description"];
        }
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
      <Bar options={options} data={data} />
    </Box>
  )
}



