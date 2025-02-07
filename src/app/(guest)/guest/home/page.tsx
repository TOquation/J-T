import React from 'react';
import PropertyCard from '@/components/cards/propertyCard';
import PropertyNavigation from '@/components/propertynavigation/PropertyNavigation';
import { properties } from '@/data/properties';
import BookingSection from '@/sections/home/bookingSection';

const page = () => {
  return (
    <div className="max-w-full p-6">
      <BookingSection />
      <PropertyNavigation />
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
