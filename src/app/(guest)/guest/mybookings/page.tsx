'use client';

import React, { useState } from 'react';
// import { ChevronRight } from 'react-icons/fi';
// import DatePicker from '@/components/dates/date';
// import Tab from '@/components/content_tab/tab';
import BookingTable from '@/components/bookingtable/table';

const page = () => {
  const [tab, setTab] = useState('active');
  

  return (
    <div className="container mx-auto">
      {/* Tab container */}
      <div className="m-5">
        {/* Tabs navigation */}
        <h1>My Bookings</h1>
        <div className="flex w-full justify-between space-x-4 rounded-md bg-slate-200">
          <div>
            <button
              className={`rounded-md px-8 py-2 text-left ${tab === 'active' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => setTab('active')}
            >
              Active
            </button>
            <button
              className={`rounded-md px-8 py-2 text-left ${tab === 'pending' ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => setTab('pending')}
            >
              Pending
            </button>
            <button
              className={`rounded-md px-8 py-2 text-left ${tab === 'concluded' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => setTab('concluded')}
            >
              Concluded
            </button>
          </div>
          <div className="">
            <button className="rounded-md bg-emerald-500 px-8 py-2 text-left text-white">
              Create New
            </button>
          </div>
        </div>

        {/* Vertical date picker */}
        {/* <div className="w-full justify-between bg-white p-4 border rounded-md shadow-md">
      {/* <input type="text" className="date-picker w-full" placeholder="Select Date" /> */}
        {/* </div> */}
        {/* <DatePicker /> */}

        {/* Tab content */}
        <div className="flex-1 rounded-md bg-white p-6 shadow-md">
          {tab === 'active' && (
            <div className="tab-content">
              <h2 className="text-2xl font-semibold">Active Tab Content</h2>
              <p>Here is the content for the Active tab.</p>
              <BookingTable />
            </div>
          )}
          {tab === 'pending' && (
            <div className="tab-content">
              <h2 className="text-2xl font-semibold">Pending Tab Content</h2>
              <p>Here is the content for the Pending tab.</p>
            </div>
          )}
          {tab === 'concluded' && (
            <div className="tab-content">
              <h2 className="text-2xl font-semibold">Concluded Tab Content</h2>
              <p>Here is the content for the Concluded tab.</p>

              {/* <Tab /> */}
            </div>
          )}
        </div>
      </div>
      </div>
  );
};

export default page;
