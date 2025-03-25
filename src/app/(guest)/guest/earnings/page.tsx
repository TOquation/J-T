import React from 'react';
import { ArrowUp, ArrowUpToLine, Share2 } from 'lucide-react';
import ReferralPerformance from '@/components/v-home/referralPerformance';
import { Separator } from '@radix-ui/react-separator';
import ReferralChart from '@/components/v-home/referralPerformance';
import InvitesList from '@/components/v-home/invite';

const page = () => {
  return (
    <div className="font- p-6">
      <div className="flex justify-between">
        {/* Header */}
        <div>
          <h2 className="text-lg font-semibold">Earnings</h2>
          <p className="text-sm text-gray-500">
            Track your affiliate rewards in one place.
          </p>
        </div>

        {/* Referral Link */}
        <div className="mt-4 flex items-center space-x-4 rounded-md border bg-[#0071da]/10">
          <input
            type="text"
            value="www.v-hospitality.com/ref/JohnDoe123"
            readOnly
            className="w-full bg-transparent p-2 text-blue-600 outline-none"
          />
          <button className="ml-2 flex items-center gap-1 bg-white p-2 text-sm font-medium text-orange-500">
            <Share2 className="h-4 w-4" />
            Share
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-6 flex items-center rounded-md border text-center">
        <div className="flex w-full justify-between">
          {/* Total Earnings */}
          <div className="flex-1 border-r">
            <h3 className="text-lg font-bold text-orange-500">₦450</h3>
            <p className="text-xs text-gray-500">Total Earnings</p>
          </div>

          {/* Available Balance */}
          <div className="flex-1 border-r">
            <h3 className="text-lg font-bold text-orange-500">₦450</h3>
            <p className="text-xs text-gray-500">Available Balance</p>
          </div>

          {/* Total Invites */}
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-800">78</h3>
            <p className="text-xs text-gray-500">Total Invites</p>
          </div>
        </div>

        {/* Withdraw Button */}
        <button className="ml- items-center rounded-md bg-orange-100 p-4 text-center text-sm font-medium text-orange-600">
          <ArrowUp />
          <p>Withdraw</p>
        </button>
      </div>

      <section>
        <div>
          <div className="p-6">
            <ReferralChart />
          </div>
          <div className="p-6">
            <InvitesList />
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
