"use client";

import React from "react";
import BookingSection from "@/components/bookingsection/BookingSection";
import PropertyCard from "@/components/shared/cards/propertyCard";
import PropertyNavigation from "@/components/propertynavigation/PropertyNavigation";
import { properties } from "@/data/properties";

const ApartmentGrid: React.FC = () => {
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

export default ApartmentGrid;