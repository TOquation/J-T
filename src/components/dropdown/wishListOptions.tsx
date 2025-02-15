'use client';

import React, { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import MoreOutlined from '../icons/moreOutlined';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Trash2 } from 'lucide-react';
import VidBoard from '../icons/vidboard';

const WishListOptions = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDialogOpen = () => {
    setDropdownOpen(false);
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);

    setTimeout(() => {
      setDropdownOpen(false);
    }, 10);
  };

  return (
    <div>
      <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <MoreOutlined />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="flex h-36 w-64 flex-col justify-center gap-4 rounded-[30px] hover:bg-white"
        >
          <DropdownMenuItem
            className="flex cursor-pointer items-center gap-2 focus:bg-transparent"
            onClick={handleDialogOpen}
          >
            <div className="rounded-lg bg-gray-100 p-2">
              <VidBoard />
            </div>
            <p className="ml-2 text-[16px] font-medium text-[221E1F]">
              Rename Category
            </p>
          </DropdownMenuItem>

          <DropdownMenuItem className="focus:bg-transparen flex cursor-pointer items-center gap-2">
            <div className="rounded-lg bg-gray-100 p-2">
              <Trash2 color="#FF3333" />
            </div>
            <p className="ml-2 text-[16px] font-medium text-[#FF3333]">
              Delete Category
            </p>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog open={dialogOpen} onOpenChange={handleDialogClose}>
        <DialogContent className="h-64 max-w-md pt-14 [&>button]:hidden">
          <div className="mx-auto flex w-[305px] flex-col space-y-1">
            <DialogHeader className="">
              <DialogTitle className="text-sm text-gray-400">
                Rename Category
              </DialogTitle>
            </DialogHeader>

            <div className="">
              <Input defaultValue="Lagos visit" />
            </div>

            <p className="text-xs text-gray-400">8/100 character</p>
          </div>

          <DialogFooter>
            <DialogFooter className="flex w-full items-center gap-2">
              <DialogClose className="flex-1 focus:outline-none">
                <Button
                  className="w-full bg-transparent py-5 font-medium text-orange-500 ring-2 ring-orange-500 hover:text-white"
                  type="submit"
                >
                  Cancel
                </Button>
              </DialogClose>
              <div className="flex-1">
                <Button
                  className="w-full bg-orange-600 py-5 font-medium hover:bg-orange-500 hover:text-white"
                  type="submit"
                >
                  Save changes
                </Button>
              </div>
            </DialogFooter>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default WishListOptions;
