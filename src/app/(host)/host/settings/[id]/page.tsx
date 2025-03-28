'use client';
import React, { useState } from 'react';
import { ArrowLeft, Edit, Edit2, Menu } from 'lucide-react';
import Image from 'next/image';
import { Separator } from '@radix-ui/react-separator';

export default function ProfileSettings() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Personal info');
  const [profile, setProfile] = useState({
    firstName: 'Jameson',
    lastName: 'Emanuel',
    businessName: '',
    phoneNumber: '+123 456 7890',
    email: 'johndoe@xmail.com',
    emergencyEmail: '',
  });

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    'Personal info',
    'Payment Method',
    'Notification',
    'Payouts',
    'Security',
  ];

  return (
    <div className="">
      {/* Mobile Header with Horizontal Navigation */}
      <div className="lg:hidden">
        <div className="flex items-center space-x-3 p-4">
          <ArrowLeft />
          <h1 className="text-xl font-bold text-gray-800 hidden md:block">Settings</h1>
        </div>

        {/* Horizontal Mobile Navigation */}
        <div className="flex overflow-x-auto bg-white">
          {menuItems.map((item) => (
            <div
              key={item}
              onClick={() => {
                setActiveSection(item);
                setIsMobileMenuOpen(false);
              }}
              className={`flex-shrink-0 cursor-pointer px-4 py-3 text-sm`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Layout with Sidebar */}
      <div className="px-2 py-4">
        <h3 className='font-bold text-orange-600 mb-4 text-xl'>Settings</h3>
        <div className="flex flex-col lg:flex-row h-[600px]">
          {/* Desktop Sidebar */}
          <div className="hidden w-64 h-full bg-white rounded-xl  pr-6 lg:block">
            {menuItems.map((item) => (
              <div
                key={item}
                onClick={() => setActiveSection(item)}
                className={`cursor-pointer px-4 py-3 ${
                  activeSection === item
                    ? 'font-semibold text-orange-600'
                    : 'text-gray-600'
                } `}
              >
                {item}
              </div>
            ))}
          </div>

          {/* Profile Content */}
          <div className="w-full lg:pl-8">
            <div className="flex justify-between">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">Profile</h2>
                <p className="text-sm text-gray-500">
                  Update your photo and personal details.
                </p>
              </div>
              <button className="inline-flex  items-center justify-center rounded-lg bg-[#EF5E17] px-6 py-2 text-white">
                 Save
                </button>
            </div>
            <Separator orientation='horizontal' className='h-[2px] w-full bg-gray-200 my-6'/>


            <div className="flex flex-col md:flex-row items-center space-x-5">
              {/* Profile Photo Section */}
              <div className="mb-4 flex flex-col space-y-4 md:mb-0">
                <div className="relative mb-4 h-60 w-48 sm:mb-0 outline-border ">
                  <Image
                    src="/host-image/profile.jpeg"
                    alt="Profile"
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
                <button className="inline-flex w-48 items-center justify-center rounded-md bg-[#EF5E17] px-2 py-2 text-white">
                  <Edit2 size={16} className="mr-2" />
                  Edit
                </button>
              </div>

              {/* Profile Form */}
              <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs text-gray-600">
                    First name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={profile.firstName}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs text-gray-600">
                    Last name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={profile.lastName}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-2 block text-xs text-gray-600">
                    Business name
                  </label>
                  <input
                    type="text"
                    name="businessName"
                    value={profile.businessName}
                    onChange={handleInputChange}
                    placeholder="Enter your business name"
                    className="focus:ring-none w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs text-gray-600">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={profile.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs text-gray-600">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={profile.email}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-2 block text-xs text-gray-600">
                    Emergency contact email
                  </label>
                  <input
                    type="email"
                    name="emergencyEmail"
                    value={profile.emergencyEmail}
                    onChange={handleInputChange}
                    placeholder="@mail.com"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
