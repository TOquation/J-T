import PropertyCard from '@/components/cards/propertyCard';
import { Button } from '@/components/ui/button';
import { properties } from '@/data/properties';
import { ArrowLeft, Share2Icon } from 'lucide-react';
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
          <Button
            className="flex items-center text-[#666666] rounded-2xl py-[6px] px-[13px]" 
            variant="outline"
          >
            <Share2Icon size={24}/>
          </Button>
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
