import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Wifi,
  Snowflake,
  Tv,
  Utensils,
  WashingMachine,
  Waves,
} from "lucide-react";

interface ListingDetail {
  label: string;
  value: string;
}

interface Amenity {
  icon: React.ReactNode;
  label: string;
}

interface Host {
  name: string;
  avatarUrl?: string;
}

interface ListingDetailsProps {
  details: ListingDetail[];
  amenities: Amenity[];
  host: Host;
}

const defaultDetails: ListingDetail[] = [
  { label: "Minimum nights", value: "3 Nights" },
  { label: "Maximum Nights", value: "365 Nights" },
  { label: "Number of Guest:", value: "10 Guests" },
  { label: "Number of bedrooms:", value: "5 Bedrooms" },
  { label: "Private Bedrooms:", value: "Yes" },
  { label: "Private Beds", value: "5 Private beds" },
  { label: "Dedicated bathrooms", value: "No" },
  { label: "Shared Bathroom", value: "No" },
];

const defaultAmenities: Amenity[] = [
  { icon: <Wifi className="w-5 h-5 text-gray-600" />, label: "Wifi" },
  { icon: <Utensils className="w-5 h-5 text-gray-600" />, label: "Cooker" },
  { icon: <Snowflake className="w-5 h-5 text-gray-600" />, label: "AC" },
  {
    icon: <WashingMachine className="w-5 h-5 text-gray-600" />,
    label: "Washing machine",
  },
  { icon: <Tv className="w-5 h-5 text-gray-600" />, label: "TV" },
  { icon: <Waves className="w-5 h-5 text-gray-600" />, label: "Swimming pool" },
];


const rules = [
  { label: "No smoking" },
  { label: "No partying allowed" },
  { label: "No unregistered guests" },
  { label: "No pets allowed" },
];

const ListingDetails = ({
  details = defaultDetails,
  amenities = defaultAmenities,
  host = { name: "Eleven Homes" },
}: Partial<ListingDetailsProps>) => {
  return (
    <div className="container max-w-3xl p-4 space-y-6">
      {/* Listing Details */}
      <section aria-labelledby="listing-details-heading">
        <h2
          id="listing-details-heading"
          className="text-xl font-semibold text-[#221E1F]"
        >
          Listing Details
        </h2>
        <div className="grid grid-cols-2 gap-y-4 text-sm text-gray-700 mt-2">
          {details.map((detail, index) => (
            <React.Fragment key={index}>
              <span>{detail.label}</span>
              <span className="font-medium">{detail.value}</span>
            </React.Fragment>
          ))}
        </div>
      </section>

      <Separator />

      {/* Amenities */}
      <section aria-labelledby="amenities-heading">
        <h2 id="amenities-heading" className="text-xl font-semibold">
          Amenities
        </h2>
        <div className="grid grid-cols-2 gap-4 mt-2 text-sm text-gray-700">
          {amenities.map((amenity, index) => (
            <div key={index} className="flex items-center space-x-2">
              {amenity.icon}
              <span>{amenity.label}</span>
            </div>
          ))}
        </div>
      </section>

      <Separator />

      {/* Meet the Host */}
      <section aria-labelledby="host-heading">
        <h2 id="host-heading" className="text-xl font-semibold">
          Meet the host
        </h2>
        <div className="flex items-center space-x-3 mt-3">
          <Avatar>
            {host.avatarUrl ? (
              <AvatarImage src={host.avatarUrl} alt={host.name} />
            ) : (
              <AvatarFallback>
                {host.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            )}
          </Avatar>
          <span className="font-medium text-gray-800">{host.name}</span>
        </div>
      </section>

      <Separator />

      {/* House rules */}
      <section>
        <div className="max-w-3xl space-y-6">
          <h2 id="rules-heading" className="text-xl font-semibold">
            House rules
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            You'll be staying in someone's home, so please treat it with care
            and respect.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-2 text-sm text-gray-700">
            {rules.map((rule, index) => (
              <div key={index}>
                <span>{rule.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Separator />
      
    </div>
  );
};


export default ListingDetails;
