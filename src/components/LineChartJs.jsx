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
  Legend
);


export default function LineChartJS({ data }) {  
  const options = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
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
          font: {
            lineHeight: 1.9,
            size: 12,
          }
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
      }
    },
  };
  
  const ref = useRef(null); 

  return (
    <Box ref={ref} className='max-chart-height'>
      <Line options={options} data={data} />
    </Box>
  )
}



