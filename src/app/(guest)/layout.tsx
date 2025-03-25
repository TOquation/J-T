'use client';

import React, { useState } from 'react';
import {
  Bell,
  Settings,
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  List,
  Calendar,
  MessageSquare,
  AnchorIcon,
  UserIcon,
  HouseIcon,
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import NavItem from '@/components/sideBars/navItem';

const GuestDashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check initial screen size
    checkMobile();

    // Add event listener to check screen size on resize
    window.addEventListener('resize', checkMobile);

    // Cleanup event listener
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const navItems = [
    { name: 'V Home', icon: LayoutDashboard, path: '/guest/home', count: null },
    { name: 'Wishlist', icon: List, path: '/guest/wishlist', count: null },
    { name: 'My Bookings', icon: Calendar, path: '/guest/bookings', count: 3 },
    {
      name: 'Messages',
      icon: MessageSquare,
      path: '/guest/messages',
      count: 3,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Top Navigation */}
      <nav className="fixed top-0 z-50 h-16 w-full border-b bg-dark">
        <div className="flex h-full items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-semibold text-orange-500">V</span>
            <span className="font-semibold text-white">HOSPITALITY</span>
          </div>

          <div className="flex items-center gap-4 rounded-2xl bg-white p-1">
            <div className="flex items-center gap-2 rounded-xl bg-orange-500 px-3 py-2">
              <UserIcon color="white" size={15} />
              <span className="text-sm text-white">Guest</span>
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-xs text-white">
                3
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-xl px-3 py-2 text-white">
              <HouseIcon size={15} />
              <span className="text-sm text-primary">Host</span>
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs text-orange-500">
                3
              </span>
            </div>
          </div>
          <div className="flex gap-3">
            <Bell className="h-5 w-5 text-white" />
            <Settings className="h-5 w-5 text-white" />
          </div>
        </div>
      </nav>

      {/* Sidebar and Main Content */}
      <div className="flex h-screen px-4 pt-20">
        {/* Sidebar */}
        <aside
          className={cn(
            'fixed flex h-full flex-col rounded-2xl bg-[#F99C1C1A] transition-all duration-300',
            // Responsive width
            isMobile 
              ? 'w-20' 
              : collapsed 
                ? 'w-20' 
                : 'w-64'
          )}
        >
          <div className={`${(isMobile || collapsed) ? 'p-3' : 'p-4'} flex-1`}>
            <div
              className={cn(
                'mb-6 flex items-center gap-3',
                (isMobile || collapsed) && 'justify-center'
              )}
            >
              <Avatar
                className={cn(
                  'transition-all duration-300',
                  (isMobile || collapsed) && 'h-10 w-10'
                )}
              >
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>AA</AvatarFallback>
              </Avatar>
              {!isMobile && !collapsed && (
                <div>
                  <h3 className="font-medium">Abdul Asmau</h3>
                  <p className="text-sm text-gray-500">Switch account</p>
                </div>
              )}
            </div>

            <nav className="space-y-2">
              <ul className="flex flex-col">
                {navItems.map((item, index) => (
                  <li
                    key={index}
                    className={`flex items-center ${
                      (isMobile || collapsed) ? 'justify-center px-2' : 'px-3'
                    }`}
                  >
                    <NavItem
                      icon={item.icon}
                      name={!isMobile && !collapsed ? item.name : ''}
                      path={item.path}
                      count={item.count}
                    />
                  </li>
                ))}
              </ul>
            </nav>

            {!isMobile && !collapsed ? (
              <div className="mt-6 rounded-xl bg-gray-900 p-4 text-white">
                <h3 className="mb-1 font-medium">Earn While You Share</h3>
                <p className="mb-3 text-sm text-gray-300">
                  Earn when friends book through your link.
                </p>
                <button className="w-full rounded-lg bg-orange-500 px-4 py-2 text-sm text-white">
                  Become an affiliate
                </button>
              </div>
            ) : (
              <div className="mt-6 rounded-xl bg-gray-900 p-3 text-white">
                <button className="w-full rounded-lg bg-orange-500 px-1 py-2 text-sm text-white">
                  <AnchorIcon />
                </button>
              </div>
            )}

            {!isMobile && (
              <button
                onClick={() => setCollapsed(collapsed)}
                className="flex justify-center border-t p-4 hover:bg-gray-100"
              >
                {collapsed ? (
                  <ChevronRight className="h-6 w-6" />
                ) : (
                  <ChevronLeft className="h-6 w-6" />
                )}
              </button>
            )}
          </div>
        </aside>

        {/* Main Content */}
        <main
          className={cn(
            'flex-1 transition-all duration-300',
            isMobile 
              ? 'ml-20' 
              : collapsed 
                ? 'ml-20' 
                : 'ml-64'
          )}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default GuestDashboardLayout;