'use client';

import React, { useState, useEffect } from 'react';
import {
  Bell,
  Settings,
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  List,
  Calendar,
  MessageSquare,
  Anchor,
  User,
  Home,
  Menu,
  X,
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import NavItem from '@/components/sideBars/navItem';

const GuestDashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Check screen size and set mobile view
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      // Auto-collapse sidebar on mobile
      if (window.innerWidth < 768) {
        setCollapsed(true);
      }
    };

    // Check initial screen size
    checkScreenSize();

    // Add event listener for resize
    window.addEventListener('resize', checkScreenSize);

    // Cleanup event listener
    return () => window.removeEventListener('resize', checkScreenSize);
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

  // Mobile menu toggle
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen">
      {/* Top Navigation */}
      <nav className="fixed top-0 z-50 h-16 w-full border-b bg-dark">
        <div className="flex h-full items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-semibold text-orange-500">V</span>
            <span className="font-semibold text-white">HOSPITALITY</span>
          </div>

          {/* Mobile Menu Toggle for smaller screens */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu} 
              className="text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Navigation Items */}
          <div className="hidden md:flex items-center gap-4 rounded-2xl bg-white p-1">
            <div className="flex items-center gap-2 rounded-xl bg-orange-500 px-3 py-2">
              <User color="white" size={15} />
              <span className="text-sm text-white">Guest</span>
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-xs text-white">
                3
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-xl px-3 py-2 text-white">
              <Home size={15} />
              <span className="text-sm text-primary">Host</span>
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs text-orange-500">
                3
              </span>
            </div>
          </div>
          <div className="hidden md:flex gap-3">
            <Bell className="h-5 w-5 text-white" />
            <Settings className="h-5 w-5 text-white" />
          </div>
        </div>
      </nav>

      {/* Sidebar and Main Content */}
      <div className="flex h-screen pt-16">
        {/* Mobile Overlay Menu */}
        {mobileMenuOpen && (
          <div 
            className="fixed inset-0 z-40 bg-black/50 md:hidden" 
            onClick={toggleMobileMenu}
          />
        )}

        {/* Sidebar */}
        <aside
          className={cn(
            'fixed z-50 top-16 bottom-0 flex h-[calc(100vh-4rem)] flex-col rounded-2xl bg-[#F99C1C1A] transition-all duration-300',
            isMobile 
              ? (mobileMenuOpen 
                  ? 'w-64 translate-x-0' 
                  : 'w-20 -translate-x-full')
              : (collapsed ? 'w-20' : 'w-64'),
            'md:static md:translate-x-0'
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

            <nav className="space-y-2">
              <ul className="flex flex-col">
                {navItems.map((item, index) => (
                  <li
                    key={index}
                    className={`flex items-center ${
                      collapsed ? 'justify-center px-2' : 'px-3'
                    }`}
                  >
                    <NavItem
                      icon={item.icon}
                      name={item.name}
                      path={item.path}
                      count={item.count}
                    />
                  </li>
                ))}
              </ul>
            </nav>

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
                  <Anchor />
                </button>
              </div>
            )}

            <button
              onClick={() => setCollapsed(!collapsed)}
              className="hidden md:flex justify-center border-t p-4 hover:bg-gray-100"
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
            'flex-1 transition-all duration-300 p-4',
            isMobile 
              ? 'w-full' 
              : (collapsed ? 'md:ml-20' : 'md:ml-64')
          )}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default GuestDashboardLayout;