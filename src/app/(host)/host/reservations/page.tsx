'use client'
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Search, ChevronDown, CalendarIcon, Menu, Settings, MessageCircle, Home, List } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

const reservations = [
  {
    guest: "Minnie Kemmer",
    bookingId: "BK190234",
    apartment: "2 Bedroom Luxury Shortlet Apartment",
    guests: 4,
    nights: 5,
    checkInOut: "Nov. 23, 2023 - Nov. 23, 2023",
    status: "Paid",
  },
  {
    guest: "Minnie Kemmer",
    bookingId: "BK190234",
    apartment: "2 Bedroom Luxury Shortlet Apartment",
    guests: 4,
    nights: 5,
    checkInOut: "Nov. 23, 2023 - Nov. 23, 2023",
    status: "Pending",
  },
  {
    guest: "Minnie Kemmer",
    bookingId: "BK190234",
    apartment: "2 Bedroom Luxury Shortlet Apartment",
    guests: 4,
    nights: 5,
    checkInOut: "Nov. 23, 2023 - Nov. 23, 2023",
    status: "Overdue",
  },
  {
    guest: "Minnie Kemmer",
    bookingId: "BK190234",
    apartment: "2 Bedroom Luxury Shortlet Apartment",
    guests: 4,
    nights: 5,
    checkInOut: "Nov. 23, 2023 - Nov. 23, 2023",
    status: "Pending",
  },
  {
    guest: "Minnie Kemmer",
    bookingId: "BK190234",
    apartment: "2 Bedroom Luxury Shortlet Apartment",
    guests: 4,
    nights: 5,
    checkInOut: "Nov. 23, 2023 - Nov. 23, 2023",
    status: "Pending",
  },
  {
    guest: "Minnie Kemmer",
    bookingId: "BK190234",
    apartment: "2 Bedroom Luxury Shortlet Apartment",
    guests: 4,
    nights: 5,
    checkInOut: "Nov. 23, 2023 - Nov. 23, 2023",
    status: "Paid",
  },
  {
    guest: "Minnie Kemmer",
    bookingId: "BK190234",
    apartment: "2 Bedroom Luxury Shortlet Apartment",
    guests: 4,
    nights: 5,
    checkInOut: "Nov. 23, 2023 - Nov. 23, 2023",
    status: "Pending",
  },
];

const getStatusStyles = (status: string) => {
  switch (status) {
    case "Paid":
      return "bg-[#0899227D] px-7 py-2 text-green-800";
    case "Pending":
      return "bg-[#F99C1C80] px-4 py-2 text-orange-800";
    case "Overdue":
      return "bg-[#FF33337D] px-4 py-2 text-pink-800";
    default:
      return "bg-gray-100 px-4 py-2 text-gray-800";
  }
};

const getActionButton = (status: string) => {
  switch (status) {
    case "Pending":
      return (
        <Button className="bg-[#FF3333] text-white w-24 py-3">
          Confirm
        </Button>
      );
    case "Overdue":
      return (
        <Button className="bg-[#2F2F2F] w-24 text-[#FF3333]">
          Cancel
        </Button>
      );
    default:
      return (
        <Button variant="outline" className="text-[#FF3333]/60 w-24 bg-[#2F2F2F]/60">
          Cancel
        </Button>
      );
  }
};

export default function ReservationsTable() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [status, setStatus] = useState("all");

  return (
    <div>
     

      <div className="">
        
        <div className="">
          <h1 className="text-2xl font-semibold text-orange-500 mb-4">
            Reservations
          </h1>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between mb-4 space-y-2 md:space-y-0">
          <div className="relative w-full md:w-1/3 mr-0 md:mr-4">
            <Input 
              placeholder="Search" 
              className="pl-10 w-full" 
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 w-full md:w-auto">
            <Select 
              value={status} 
              onValueChange={setStatus}
              defaultValue="all"
            >
              <SelectTrigger className="w-full md:w-[180px] bg-gray-100">
                <div className="flex items-center">
                  <SelectValue placeholder="All Status" />
                  
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="paid">Paid</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="overdue">Overdue</SelectItem>
              </SelectContent>
            </Select>
            
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full md:w-[240px] justify-start text-left font-normal bg-gray-100",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        {/* Mobile View */}
        <div className="block md:hidden">
          {reservations.map((reservation, index) => (
            <div 
              key={index} 
              className="bg-white border-b py-4  space-y-2"
            >
              <div className="flex justify-between items-center px-4">
                <div>
                  <div className="font-semibold">{reservation.guest}</div>
                  <div className="text-sm text-gray-500">
                    {reservation.bookingId}
                  </div>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${getStatusStyles(
                    reservation.status
                  )}`}
                >
                  {reservation.status}
                </span>
              </div>
              <div className="px-4 text-sm text-gray-600">
                {reservation.apartment}
              </div>
              <div className="px-4 flex justify-between text-sm text-gray-600">
                <span>{reservation.guests} Guest</span>
                <span>{reservation.nights} Nights</span>
              </div>
              <div className="px-4 text-sm text-gray-600">
                {reservation.checkInOut}
              </div>
              <div className="flex justify-end px-4">
                {getActionButton(reservation.status)}
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View */}
        <div className="hidden md:block">
          <Table>
            <TableHeader className="bg-[#FDE7DC]">
              <TableRow className="rounded-2xl">
                <TableHead className="text-gray-600 text-left">
                  Guest
                </TableHead>
                <TableHead className="text-gray-600 text-left">
                  Apartment
                </TableHead>
                <TableHead className="text-gray-600 text-left">
                  Guest
                </TableHead>
                <TableHead className="text-gray-600 text-left">
                  Nights
                </TableHead>
                <TableHead className="text-gray-600 text-left">
                  Check-in & Out
                </TableHead>
                <TableHead className="text-gray-600 text-left">
                  Status
                </TableHead>
                <TableHead className="text-gray-600 text-left">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reservations.map((reservation, index) => (
                <TableRow key={index}>
                  <TableCell className="py-6">
                    <div>{reservation.guest}</div>
                    <div className="text-sm text-gray-500">
                      {reservation.bookingId}
                    </div>
                  </TableCell>
                  <TableCell>{reservation.apartment}</TableCell>
                  <TableCell>{reservation.guests} Guest</TableCell>
                  <TableCell>{reservation.nights} Nights</TableCell>
                  <TableCell>{reservation.checkInOut}</TableCell>
                  <TableCell>
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${getStatusStyles(
                        reservation.status
                      )}`}
                    >
                      {reservation.status}
                    </span>
                  </TableCell>
                  <TableCell>{getActionButton(reservation.status)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Mobile Footer Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-3">
        <div className="flex flex-col items-center text-gray-600">
          <Home className="h-5 w-5" />
          <span className="text-xs mt-1">V Homes</span>
        </div>
        <div className="flex flex-col items-center text-gray-600">
          <List className="h-5 w-5" />
          <span className="text-xs mt-1">Listing</span>
        </div>
        <div className="flex flex-col items-center text-orange-500">
          <MessageCircle className="h-5 w-5" />
          <span className="text-xs mt-1">Reservations</span>
        </div>
        <div className="flex flex-col items-center text-gray-600">
          <MessageCircle className="h-5 w-5" />
          <span className="text-xs mt-1">Messages</span>
        </div>
      </div>
    </div>
  );
}