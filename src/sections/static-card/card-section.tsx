import React from 'react';
import { Calendar, TrendingUp, LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';


interface StatCardProps {
  title: string;
  value: number | string;
  icon: LucideIcon;
  trend: number;
  styles?: {
    container?: string;
    title?: string;
    value?: string;
    iconContainer?: string;
    trendContainer?: string;
  };
}


const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon: Icon,
  trend,
  styles = {}
}) => {
  const isPositiveTrend = trend >= 0;

  return (
    <div className={cn(
      'p-4 rounded-lg space-y-4', 
      'bg-[#FDE7DC]', 
      styles.container
    )}>
      <div className="flex justify-between items-center">
        <div>
          <h3 className={cn(
            'text-sm text-gray-600 font-medium', 
            styles.title
          )}>
            {title}
          </h3>
          <span className={cn(
            'text-2xl font-bold text-gray-800', 
            styles.value
          )}>
            {value}
          </span>
        </div>
        <div className={cn(
          'bg-white p-2 rounded-lg', 
          styles.iconContainer
        )}>
          <Icon className="h-5 w-5 text-gray-600" />
        </div>
      </div>
      <div className="flex items-center text-sm">
        <div className={cn(
          'flex items-center rounded-full px-2 py-1 bg-white',
          isPositiveTrend ? 'text-green-600' : 'text-red-600',
          styles.trendContainer
        )}>
          <TrendingUp className="mr-1 h-4 w-4" />
          <span>{Math.abs(trend)}%</span>
        </div>
        <span className="ml-2 text-gray-500">From last week</span>
      </div>
    </div>
  );
};


const StatCards = () => {
  const statsData = [
    {
      title: 'Total Bookings',
      value: 97,
      icon: Calendar,
      trend: 9.7,
      styles: {
        container: 'bg-[#FDE7DC] hover:bg-[#FDD5C0]',
        title: 'text-orange-800',
        value: 'text-orange-900',
        iconContainer: 'bg-orange-100',
        trendContainer: 'bg-orange-50'
      }
    },
    {
      title: 'Revenue',
      value: '$24,500',
      icon: Calendar,
      trend: 12.3,
      styles: {
        container: 'bg-[#E6F3E6] hover:bg-[#D0E6D0]',
        title: 'text-green-800',
        value: 'text-green-900',
        iconContainer: 'bg-green-100',
        trendContainer: 'bg-green-50'
      }
    },
    {
      title: 'Active Users',
      value: 256,
      icon: Calendar,
      trend: 5.5,
      styles: {
        container: 'bg-[#E6F0F9] hover:bg-[#D0E2F3]',
        title: 'text-blue-800',
        value: 'text-blue-900',
        iconContainer: 'bg-blue-100',
        trendContainer: 'bg-blue-50'
      }
    },
    {
      title: 'Conversion Rate',
      value: '3.2%',
      icon: Calendar,
      trend: -2.1,
      styles: {
        container: 'bg-[#F9E6E6] hover:bg-[#F3D0D0]',
        title: 'text-red-800',
        value: 'text-red-900',
        iconContainer: 'bg-red-100',
        trendContainer: 'bg-red-50'
      }
    }
  ];

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-[75%]'>
      {statsData.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default StatCards;

