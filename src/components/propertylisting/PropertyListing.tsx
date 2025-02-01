"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { CalendarIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import Image from "next/image";

const PropertyListing = () => {
  const [checkIn, setCheckIn] = useState<Date | undefined>();
  const [checkOut, setCheckOut] = useState<Date | undefined>();

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Image Gallery Section */}
        <div className="w-full col-span-2">
          {/* Row for Child 1 and Child 2 */}
          <div className="flex gap-6">
            {/* Child 1: Full-width Image */}
            <div className="flex-[60%] relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/images/img1.png"
                alt="Property Image"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Child 2: Grid of Small Images */}
            <div className="flex-[40%] grid grid-cols-2 gap-6 h-[400px]">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="relative h-full rounded-2xl overflow-hidden"
                >
                  <Image
                    src={`/images/grid_${item}_img.png`}
                    alt={`Thumbnail ${item}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
              
            </div>
          </div>

          {/* Text Below the Row */}
          <p className="text-sm text-muted-foreground mt-4">
            Last Updated on: Aug 22 2024
          </p>
        </div>

        

        {/* Booking Form Section (Card Layout) */}
        <Card className="rounded-2xl shadow-lg">
          <CardContent className="p-6 space-y-6">
            {/* Price Section */}
            <div>
              <div className="flex gap-3 items-center">
                <h2 className="text-2xl font-semibold">NGN320,000</h2>
                <p className="text-sm text-muted-foreground">per night</p>
              </div>
              <p className="text-sm text-muted-foreground">minimum night 3</p>
            </div>

            {/* Check-In and Check-Out Date Pickers */}
            <div className="grid grid-cols-2 gap-4">
              {/* Check-In Date */}
              <div className="space-y-2">
                <Label>Check In</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !checkIn && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {checkIn ? (
                        format(checkIn, "PPP")
                      ) : (
                        <span>Select date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={checkIn}
                      onSelect={setCheckIn}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Check-Out Date */}
              <div className="space-y-2">
                <Label>Check Out</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !checkOut && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {checkOut ? (
                        format(checkOut, "PPP")
                      ) : (
                        <span>Select date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={checkOut}
                      onSelect={setCheckOut}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            {/* Guest Selection */}
            <div className="space-y-2">
              <Label>Guest</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="0 Adult, 0 Children, 0 Infant" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">
                    1 Adult, 0 Children, 0 Infant
                  </SelectItem>
                  <SelectItem value="2">
                    2 Adults, 0 Children, 0 Infant
                  </SelectItem>
                  <SelectItem value="3">
                    3 Adults, 0 Children, 0 Infant
                  </SelectItem>
                  <SelectItem value="4">
                    4 Adults, 0 Children, 0 Infant
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Request to Book Button */}
            <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
              Request to Book
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PropertyListing;
