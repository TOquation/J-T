'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const bookings = Array(10).fill({
  id: 'BK190234',
  price: '\u20A61,644,640.00',
  title: '2 Bedroom Luxury Shortlet Apartment',
  guests: 4,
  nights: 5,
  checkIn: 'Nov. 23, 2023',
  checkOut: 'Nov. 23, 2023',
  bookedOn: 'Nov. 12, 2024',
});

export default function BookingTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(bookings.length / itemsPerPage);

  const currentBookings = bookings.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="max-w-3xl mx-auto p-4">
      {currentBookings.map((booking, index) => (
        <Card key={index} className="p-4 mb-2 flex items-center justify-between border border-gray-300 rounded-lg shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gray-200 rounded-md"></div>
            <div>
              <p className="text-sm font-medium">{booking.id}</p>
              <p className="text-lg font-bold">{booking.price}</p>
              <p className="text-sm text-gray-500">{booking.title}</p>
              <p className="text-xs text-gray-400">Booked on: {booking.bookedOn}</p>
            </div>
          </div>
          <div className="text-center text-gray-600">
            <p className="text-sm">{booking.guests} Guests</p>
            <p className="text-sm">{booking.nights} Nights</p>
            <p className="text-sm">Check In: {booking.checkIn}</p>
            <p className="text-sm">Check Out: {booking.checkOut}</p>
          </div>
          <ChevronRight className="text-gray-400" />
        </Card>
      ))}

      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: totalPages }, (_, i) => (
          <Button
            key={i}
            variant={currentPage === i + 1 ? 'default' : 'outline'}
            size="sm"
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </Button>
        ))}
      </div>
    </div>
  );
}
