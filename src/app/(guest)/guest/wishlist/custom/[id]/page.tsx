import Link from 'next/link';
import React from 'react';
import PropertyCard from '@/components/cards/propertyCard';
import { Button } from '@/components/ui/button';
import { properties } from '@/data/properties';
import { ArrowLeft, Share2Icon } from 'lucide-react';
import WishListCustom from '@/components/dropdown/wishListOptions';

const page = () => {
  return (
    <div className="container p-6">
      <Link
        href={'/guest/wishlist/custom'}
        className="mb-3 flex cursor-pointer items-center text-black"
      >
        <ArrowLeft size={24} />
        <span className="ml-2 text-[16px] font-medium text-[#221E1F]">
          Your Category
        </span>
      </Link>
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-[20px] font-semibold text-[#221E1F]">
            Lagos vacation
          </h2>
          <h3 className="text-[14px] font-[450] text-[#666666]">5 Saved</h3>
        </div>
        <div className="flex items-center gap-3">
          <Button
            className="flex items-center rounded-2xl px-[13px] py-[6px] text-[14px] font-normal text-[#666666] hover:text-orange-500 hover:bg-transparent hover:border-orange-500"
            variant="outline"
          >
            <Share2Icon size={24} />
            Share
          </Button>
          <WishListCustom />
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
