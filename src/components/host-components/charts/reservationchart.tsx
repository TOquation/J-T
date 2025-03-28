'use client';

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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils'; // Utility from shadcn/ui to merge classNames

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface ReservationChartProps {
  title?: string;
  labels?: string[];
  approvedData?: number[];
  pendingData?: number[];
  approvedColor?: string;
  pendingColor?: string;
  dropdownOptions?: string[];
  selectedOption?: string;
  onOptionChange?: (option: string) => void;
  className?: string;
}

const ReservationChart: React.FC<ReservationChartProps> = ({
  title = 'Reservation',
  labels = ['12 Jun', '13 Jun', '14 Jun', '15 Jun', '16 Jun', '17 Jun'],
  approvedData = [60, 60, 60, 60, 60, 30],
  pendingData = [30, 90, 0, 30, 90, 0],
  approvedColor = '#A3D4C5',
  pendingColor = '#F5C77E',
  dropdownOptions = ['Last 6 Months', 'Last 3 Months', 'Last Month'],
  selectedOption = 'Last 6 Months',
  onOptionChange,
  className,
}) => {
  const data = {
    labels,
    datasets: [
      {
        label: 'Approved',
        data: approvedData,
        backgroundColor: approvedColor,
        borderWidth: 0,
        barThickness: 30,
      },
      {
        label: 'Pending',
        data: pendingData,
        backgroundColor: pendingColor,
        borderWidth: 0,
        barThickness: 30,
      },
    ],
  };

  
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          font: {
            family: 'Inter',
            size: 14,
          },
          padding: 20,
          usePointStyle: true,
          pointStyle: 'rect',
        },

        
      },
      tooltip: {
        backgroundColor: '#333333',
        titleFont: {
          family: 'Inter',
          size: 14,
        },
        bodyFont: {
          family: 'Inter',
          size: 12,
        },
      },
    },
    scales: {
      x: {
        stacked: true,
        ticks: {
          font: {
            family: 'Inter',
            size: 12,
          },
          color: '#666666',
        },
        grid: {
          display: false,
        },
        border: {
          width: 1,
          color: '#666666',
        },
      },
      y: {
        stacked: true,
        max: 150,
        min: 0,
        ticks: {
          stepSize: 30,
          font: {
            family: 'Inter',
            size: 12,
          },
          color: '#666666',
        },
        grid: {
          color: '#E5E7EB',
          lineWidth: 1,
        },
        border: {
          display: false,
        },

        
      },
    },
  };

  return (
    <div className={cn('rounded-lg bg-white p-6 shadow-sm', className)}>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-['Inter'] text-xl font-bold text-[#333333]">
          {title}
        </h2>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center font-['Inter'] text-sm text-[#666666]">
            {selectedOption} <ChevronDown className="ml-1 h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {dropdownOptions.map((option) => (
              <DropdownMenuItem
                key={option}
                onClick={() => onOptionChange?.(option)}
                className="font-['Inter'] text-sm text-[#666666]"
              >
                {option}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="h-80">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default ReservationChart;
