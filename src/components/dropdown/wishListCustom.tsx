'use client';

import React from 'react';
import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { StickyNote, MoreHorizontal, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MoreOutlined from '../icons/moreOutlined';

const WishListCustom = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div>
      <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            className="flex items-center rounded-2xl border border-red-600 px-[15px] py-[6px] text-red-600"
            variant="outline"
          >
            <span>
              <MoreOutlined />
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="mt-4 flex w-64 flex-col space-y-4 rounded-2xl py-4"
          align="end"
        >
          <DropdownMenuItem className="cursor-pointer hover:bg-transparent focus:bg-transparent active:bg-transparent">
            <div className="inline-block rounded-lg bg-gray-100 p-2">
              <StickyNote size={30} className="" />
            </div>
            <span className="ml-3 text-[18px]">Rename Category</span>
          </DropdownMenuItem>

          <DropdownMenuItem className="cursor-pointer bg-transparent text-red-600 hover:bg-transparent focus:bg-transparent active:bg-transparent">
            <div className="inline-block rounded-lg bg-gray-100 p-2">
              <Trash2 size={30} className="text-red-600" />
            </div>
            <span className="ml-3 text-[18px] text-red-600">
              Delete Category
            </span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default WishListCustom;
