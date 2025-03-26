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
  Users,
  DollarSign,
  AnchorIcon,
  UserIcon,
  HouseIcon,
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);

  const navItems = [
    { name: 'Dashboard', icon: LayoutDashboard, count: null, active: true },
    { name: 'Listing', icon: List, count: null },
    { name: 'Reservations', icon: Calendar, count: 3 },
    { name: 'Messages', icon: MessageSquare, count: 3 },
    { name: 'Co-Host', icon: Users, count: null },
    { name: 'Earnings', icon: DollarSign, count: null },
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
            <div className="flex items-center gap-2 rounded-xl px-3 py-2">
              <UserIcon size={15} />
              <span className="text-sm">Guest</span>
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-xs text-white">
                3
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-xl bg-orange-500 px-3 py-2 text-white">
              <HouseIcon size={15} />
              <span className="text-sm">Host</span>
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
      <div className="flex h-screen pt-20">
        {/* Sidebar */}
        <aside
          className={cn(
            // Hide sidebar on mobile, show on lg screens
            'hidden lg:flex lg:fixed h-full flex-col rounded-2xl bg-[#F99C1C1A] transition-all duration-300',
            collapsed ? 'lg:w-20' : 'lg:w-64'
          )}
        >
          <div className={`${collapsed ? 'p-3' : 'p-4'} flex-1`}>
            <div
              className={cn(
                'mb-6 flex items-center gap-3',
                collapsed && 'justify-center'
              )}
            >
              <Avatar
                className={cn(
                  'transition-all duration-300',
                  collapsed && 'h-10 w-10'
                )}
              >
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>AA</AvatarFallback>
              </Avatar>
              {!collapsed && (
                <div>
                  <h3 className="font-medium">Abdul Asmau</h3>
                  <p className="text-sm text-gray-500">Switch account</p>
                </div>
              )}
            </div>

            <TooltipProvider>
              <nav className="space-y-2">
                {navItems.map((item) => (
                  <Tooltip key={item.name} delayDuration={0}>
                    <TooltipTrigger asChild>
                      <div
                        className={cn(
                          'relative flex cursor-pointer items-center gap-3 rounded-lg p-3',
                          item.active
                            ? 'bg-primary/15 text-orange-500'
                            : 'hover:bg-gray-50',
                          collapsed ? 'justify-center px-2' : 'px-3'
                        )}
                      >
                        <item.icon
                          className={cn(
                            'transition-all duration-300',
                            collapsed ? 'h-5 w-5' : 'h-5 w-5'
                          )}
                        />
                        {!collapsed && (
                          <div className="flex flex-1 items-center justify-between">
                            <span>{item.name}</span>
                            {item.count && (
                              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-xs text-white">
                                {item.count}
                              </span>
                            )}
                          </div>
                        )}
                        {collapsed && item.count && (
                          <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-orange-500 text-xs text-white">
                            {item.count}
                          </span>
                        )}
                      </div>
                    </TooltipTrigger>
                    {collapsed && (
                      <TooltipContent side="right">
                        <p>{item.name}</p>
                      </TooltipContent>
                    )}
                  </Tooltip>
                ))}
              </nav>
            </TooltipProvider>

            {!collapsed ? (
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
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="flex justify-center border-t p-4 hover:bg-gray-100"
            >
              {collapsed ? (
                <ChevronRight className="h-6 w-6" />
              ) : (
                <ChevronLeft className="h-6 w-6" />
              )}
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main
          className={cn(
            'bg-[#F8FAFC] flex-1 px-4 transition-all duration-300','lg:ml-0',
            collapsed ? 'lg:ml-20' : 'lg:ml-64'
          )}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;