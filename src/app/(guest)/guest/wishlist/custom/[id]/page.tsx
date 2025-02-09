import PropertyCard from '@/components/cards/propertyCard';
import { Button } from '@/components/ui/button';
import { properties } from '@/data/properties';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { 
  ArrowLeft, 
  MoreHorizontal, 
  Share2Icon, 
  StickyNote, 
  Trash2
} from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <div className="container p-6">
      <Link
        href={'/guest/wishlist/custom'}
        className="mb-3 flex cursor-pointer items-center text-black"
      >
        <ArrowLeft size={24} />
        <span className="ml-2 text-[16px] font-medium text-[#221E1F]">Your Category</span>
      </Link>
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className='text-[20px] font-semibold text-[#221E1F]'>Lagos vacation</h2>
          <h3 className='text-[14px] font-[450] text-[#666666]'>5 Saved</h3>
        </div>
        <div className="flex items-center gap-3">
          <Button
            className="flex items-center py-[6px] px-[13px] rounded-2xl text-[#666666] text-[14px] font-normal"
            variant="outline"
          >
            <Share2Icon size={24}/>
            Share
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="flex items-center rounded-2xl py-[6px] px-[20px] border border-red-600 text-red-600 hover:border-red-600 focus:border-red-600 active:border-red-600 hover:bg-transparent" 
                variant="outline">
                <MoreHorizontal 
                size={24}
                className='text-red-600'
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='flex flex-col space-y-4 w-64 py-4 rounded-2xl mt-4 ' align='end'>
              <DropdownMenuItem className='cursor-pointer hover:bg-transparent focus:bg-transparent active:bg-transparent'>
                <div className='p-2 rounded-lg inline-block bg-gray-100'>
                  <StickyNote 
                  size={30} 
                  className=''/> 
                </div>
                <span className='ml-3 text-[18px]'>Rename Category</span>
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer text-red-600 bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent'>
                <div className='p-2 rounded-lg inline-block bg-gray-100'>
                <Trash2  
                size={30}
                className='text-red-600'
                />
                </div>
                <span className='ml-3 text-[18px] text-red-600'>
                  Delete Category
                </span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
    </div>
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {properties.map((property) => (
          <div key={property.id} className="w-full">
            <PropertyCard property={property} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
