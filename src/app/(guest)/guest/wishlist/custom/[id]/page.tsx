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
        <ArrowLeft size={20} />
        <span className="ml-2 text-lg">Your Category</span>
      </Link>
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2>Lagos vacation</h2>
          <h3>5 Saved</h3>
        </div>
        <div className="flex items-center gap-3">
          <Button
            className="flex items-center gap-2 rounded-2xl"
            variant="outline"
          >
            <Share2Icon />
            Share
          </Button>
          <Button
            className="flex items-center gap-2 rounded-2xl"
            variant="outline"
          >
            <Share2Icon />
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
