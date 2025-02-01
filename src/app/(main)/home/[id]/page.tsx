import PropertyListing from "@/components/propertylisting/PropertyListing";
import React from "react";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const page = ({ params }: Props) => {
  return (
    <div>
      <PropertyListing />
    </div>
  );
};

export default page;
