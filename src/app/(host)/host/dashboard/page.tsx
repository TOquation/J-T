// app/dashboard/page.tsx
import HorizontalStackedBarChart from '@/components/host-components/charts/stackedbarchart';
import DashboardCard from '@/components/host-components/cards/dashboard-card';
import RevenueChart from '@/components/host-components/charts/earnings-chart';
import ReservationChart from '@/components/host-components/charts/reservationchart';
import { CoHostCard } from '@/components/host-components/others/cohost';


type ChartData = {
  month: string;
  revenue: number;
};

type CoHost = {
  name: string;
  action: string;
  permissions: number;
  status: "online" | "offline";
};

const DashBoard = () => {
  // Chart data for RevenueChart
  const chartData: ChartData[] = [
    { month: 'Dec 2027', revenue: 2000000 },
    { month: 'Jan 2028', revenue: 1000000 },
    { month: 'Feb 2028', revenue: 2500000 },
    { month: 'Mar 2028', revenue: 1500000 },
    { month: 'Apr 2028', revenue: 3000000 },
    { month: 'May 2028', revenue: 2000000 },
  ];

  // Co-host data for CoHostCard
  const coHosts: CoHost[] = [
    {
      name: 'Francis Mayert',
      action: 'Out reach',
      permissions: 4,
      status: 'online',
    },
    {
      name: 'Francis Mayert',
      action: 'Out reach',
      permissions: 4,
      status: 'offline',
    },
    {
      name: 'Francis Mayert',
      action: 'Out reach',
      permissions: 4,
      status: 'offline',
    },
    {
      name: 'Francis Mayert',
      action: 'Out reach',
      permissions: 4,
      status: 'online',
    },
    {
      name: 'Francis Mayert',
      action: 'Out reach',
      permissions: 4,
      status: 'online',
    },
    {
      name: 'Francis Mayert',
      action: 'Out reach',
      permissions: 4,
      status: 'offline',
    },
    {
      name: 'Francis Mayert',
      action: 'Out reach',
      permissions: 4,
      status: 'offline',
    },
  ];

  return (
    <div className="flex gap-4 p-4 min-h-screen bg-gray-100">
      {/* Main Content (80%) */}
      <div className="w-full md:w-[80%] grid gap-4">
        {/* Dashboard Cards Section */}
        <div className="col-span-3 grid grid-cols-1 gap-4 xl:grid-cols-3">
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

        {/* Charts Section */}
        <div className="col-span-3 flex gap-4">
          <HorizontalStackedBarChart className="w-full md:w-[60%]" />
          <RevenueChart data={chartData} className="w-full md:w-[40%]" />
        </div>

        {/* Reservation Chart and CoHostCard Section */}
        <div className="col-span-3 flex gap-4">
          <ReservationChart className="w-full md:w-[50%]" />
          <CoHostCard coHosts={coHosts} className="w-full md:w-[50%]" />
        </div>
      </div>

      {/* Sidebar/Placeholder (20%) */}
      <div className="">

      </div>
    </div>
  );
};

export default DashBoard;