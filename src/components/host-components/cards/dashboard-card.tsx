// components/DashboardCard.tsx
import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface DashboardCardProps {
  title: string;
  amount: string;
  percentageChange: number;
  fromLastWeek: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  amount,
  percentageChange,
  fromLastWeek,
}) => {
  const isPositive = percentageChange > 0;

  return (
    <div className="bg-white rounded-2xl shadow-sm p-3 flex flex-col gap-2 w-full">
      {/* Title and Icon */}
      <div className="flex justify-between items-center">
        <h3 className="text-gray-600 text-sm font-medium">{title}</h3>
        <div className="bg-orange-100 p-2 rounded-full">
          <ArrowUpRight className="w-4 h-4 text-orange-500" />
        </div>
      </div>

      {/* Amount */}
      <p className="text-2xl font-bold text-gray-900">{amount}</p>

      {/* Percentage Change and From Last Week */}
      <div className="flex items-center gap-2">
        <div
          className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
            isPositive ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
          }`}
        >
          {isPositive ? (
            <ArrowUpRight className="w-4 h-4" />
          ) : (
            <ArrowDownRight className="w-4 h-4" />
          )}
          <span>{Math.abs(percentageChange)}%</span>
        </div>
        <span className="text-gray-500 text-xs">{fromLastWeek}</span>
      </div>
    </div>
  );
};

export default DashboardCard;