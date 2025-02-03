import ListingDetails from "@/components/listingdetails/ListingDetails";
import PropertyListing from "@/components/propertylisting/PropertyListing";
import PropertyListingPage from "@/components/propertylistingpage/PropertyListingPage";

import { List } from "lucide-react";
import React from "react";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const page = ({ params }: Props) => {
  return (
    <div className="max-w-full p-6">
      <PropertyListing />
      <ListingDetails />
      <PropertyListingPage />
      
    </div>
  );
};

export default page;
