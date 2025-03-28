import DashboardCard from '@/components/host-components/cards/dashboard-card';
import InviteCard from '@/components/host-components/cards/invite-card';
import DonutChart from '@/components/host-components/charts/donutchart';
import RevenueChart from '@/components/host-components/charts/earnings-chart';
import ReferralLinkChart from '@/components/host-components/charts/referral-link-chart';
import { Calendar } from 'lucide-react';
import React from 'react';
const chartData = [
  { month: 'Dec 2027', revenue: 2000000 },
  { month: 'Jan 2028', revenue: 1000000 },
  { month: 'Feb 2028', revenue: 2500000 },
  { month: 'Mar 2028', revenue: 1500000 },
  { month: 'Apr 2028', revenue: 3000000 },
  { month: 'May 2028', revenue: 2000000 },
];

const statsData = [
  {
    title: 'Total Bookings',
    value: 97,
    icon: Calendar,
    trend: 9.7,
    styles: {
      container: 'bg-[#FDE7DC] rounded-lg lg:rounded-2xl',
      title: 'text-ora[#2F2F2F]',
      value: 'text-ora[#2F2F2F]',
      iconContainer: 'bg-white',
      trendContainer: 'bg-white',
    },
  },
];

const Earnings = () => {
  return (
    <div className="">
      <div className="flex flex-col gap-4 py-2 md:flex-row">
        <div className="grid-cols-1 grid w-full gap-4 lg:w-[70%] lg:grid-cols-3">

          <div className='col-span-3 w-full grid grid-cols-1 xl:grid-cols-3 gap-4'>
            <DashboardCard
              title="Total Earnings"
              amount="N5,400,000"
              percentageChange={9.7}
              fromLastWeek="From last week"
            />
            <DashboardCard
              title="Total Earnings"
              amount="N5,400,000"
              percentageChange={9.7}
              fromLastWeek="From last week"
            />
            <DashboardCard
              title="Total Earnings"
              amount="N5,400,000"
              percentageChange={9.7}
              fromLastWeek="From last week"
            />
          </div>
          <RevenueChart data={chartData} className="col-span-3" />
          <ReferralLinkChart className="col-span-3" />
        </div>

        <div className="flex flex-1 flex-col gap-4">
          <InviteCard
            totalInvites={100}
            referralLink="www.example.com/ref/AnotherUser"
            className="w-full bg-gray-50 shadow-lg hidden lg:block"
          />
          <DonutChart />
        </div>
      </div>
    </div>
  );
};

export default Earnings;
