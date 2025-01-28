"use client";

import React, { useState } from "react";
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
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);

  const navItems = [
    { name: "Dashboard", icon: LayoutDashboard, count: null, active: true },
    { name: "Listing", icon: List, count: null },
    { name: "Reservations", icon: Calendar, count: 3 },
    { name: "Messages", icon: MessageSquare, count: 3 },
    { name: "Co-Host", icon: Users, count: null },
    { name: "Earnings", icon: DollarSign, count: null },
  ];

  <Button onClick={() => setCollapsed(!collapsed)}>Open</Button>;

  return (
    <div className="min-h-screen">
      {/* Top Navigation */}
      <nav className="border-b h-16 fixed top-0 w-full bg-dark z-50">
        <div className="flex items-center justify-between px-4 h-full">
          <div className="flex items-center gap-2">
            <span className="text-orange-500 font-semibold text-xl">V</span>
            <span className="font-semibold text-white">HOSPITALITY</span>
          </div>

          <div className="flex items-center gap-4 bg-white rounded-2xl p-1">
            <div className="flex items-center gap-2  rounded-xl  px-3 py-2">
              <UserIcon size={15} />
              <span className="text-sm">Guest</span>
              <span className="bg-orange-500 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs">
                3
              </span>
            </div>
            <div className="flex items-center gap-2 bg-orange-500 text-white rounded-xl px-3 py-2">
              <HouseIcon size={15} />
              <span className="text-sm">Host</span>
              <span className="bg-white text-orange-500 w-5 h-5 rounded-full flex items-center justify-center text-xs">
                3
              </span>
            </div>
          </div>
          <div className="flex gap-3">
            <Bell className="w-5 h-5 text-white" />
            <Settings className="w-5 h-5 text-white" />
          </div>
        </div>
      </nav>

      {/* Sidebar and Main Content */}
      <div className="flex pt-20 px-4  h-screen">
        {/* Sidebar */}
        <aside
          className={cn(
            "rounded-2xl h-full bg-[#F99C1C1A] fixed transition-all duration-300 flex flex-col",
            collapsed ? "w-20" : "w-64"
          )}
        >
          {/* <Button onClick={() => setCollapsed(!collapsed)}>Open</Button>; */}
          <div className={`${collapsed ? "p-3" : "p-4"} flex-1`}>
            <div
              className={cn(
                "flex items-center gap-3 mb-6",
                collapsed && "justify-center"
              )}
            >
              <Avatar
                className={cn(
                  "transition-all duration-300",
                  collapsed && "w-10 h-10"
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
                          "flex items-center gap-3 p-3 rounded-lg cursor-pointer relative",
                          item.active
                            ? "bg-primary/15 text-orange-500"
                            : "hover:bg-gray-50",
                          collapsed ? "justify-center px-2" : "px-3"
                        )}
                      >
                        <item.icon
                          className={cn(
                            "transition-all duration-300",
                            collapsed ? "w-5 h-5" : "w-5 h-5"
                          )}
                        />
                        {!collapsed && (
                          <div className="flex items-center justify-between flex-1">
                            <span>{item.name}</span>
                            {item.count && (
                              <span className="bg-orange-500 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs">
                                {item.count}
                              </span>
                            )}
                          </div>
                        )}
                        {collapsed && item.count && (
                          <span className="absolute top-0 right-0 bg-orange-500 text-white w-4 h-4 rounded-full flex items-center justify-center text-xs">
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
              <div className="mt-6 bg-gray-900 text-white p-4 rounded-xl">
                <h3 className="font-medium mb-1">Earn While You Share</h3>
                <p className="text-sm text-gray-300 mb-3">
                  Earn when friends book through your link.
                </p>
                <button className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm w-full">
                  Become an affiliate
                </button>
              </div>
            ) : (
              <div className="mt-6 bg-gray-900 text-white p-3 rounded-xl">
                <button className="bg-orange-500 text-white px-1 py-2 rounded-lg text-sm w-full">
                  <AnchorIcon />
                </button>
              </div>
            )}
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="p-4 hover:bg-gray-100 border-t flex justify-center"
            >
              {collapsed ? (
                <ChevronRight className="w-6 h-6" />
              ) : (
                <ChevronLeft className="w-6 h-6" />
              )}
            </button>
          </div>
          {/* Collapse Toggle Button */}
        </aside>

        {/* Main Content */}
        <main
          className={cn(
            "flex-1 p-6 transition-all duration-300",
            collapsed ? "ml-20" : "ml-64"
          )}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
