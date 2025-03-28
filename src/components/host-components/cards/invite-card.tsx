'use client';
import React from 'react';
import { Share2 } from 'lucide-react';

const InviteCard = ({
  totalInvites = 78,
  referralLink = 'www.v-hospitality.com/ref/JohnDoe123',
  className = '',
}) => {
  return (
    <div className={`rounded-lg bg-white p-4 shadow-md ${className}`}>
      {/* Total Invites Section */}
      <div className="mb-3">
        <h2 className="text-3xl font-bold text-gray-800">{totalInvites}</h2>
        <p className="text-sm text-gray-500">Total Invites</p>
      </div>

      {/* Referral Link Section */}
      <div className="flex flex-col  rounded-md bg-blue-50 p-3">
        <p className="truncate text-sm text-blue-600">{referralLink}</p>

        {/* Share Button */}
        <button className="mt-3 flex w-full items-center justify-center rounded-md border border-gray-300 bg-white py-2 text-orange-500 transition-colors hover:bg-gray-50">
          <Share2 className="mr-2 h-5 w-5" />
          <span className="text-sm font-medium">Share</span>
        </button>
      </div>
    </div>
  );
};

export default InviteCard;
