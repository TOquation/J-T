'use client';
import Link from 'next/link';

export default function page() {
  return (
    <div className="p-6">
      <h1 className="mb-6 text-2xl font-bold"> Wishlists</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* General Wishlist Card */}
        <Link href="/guest/wishlist/general">
          <div className="cursor-pointer rounded-lg border p-6 transition-shadow hover:shadow-lg">
            <h2 className="mb-2 text-xl font-semibold">General Wishlist</h2>
            <p className="text-gray-600">
              Your default collection of favorite properties
            </p>
          </div>
        </Link>

        {/* Custom Wishlist Card */}
        <Link href="/guest/wishlist/custom">
          <div className="cursor-pointer rounded-lg border p-6 transition-shadow hover:shadow-lg">
            <h2 className="mb-2 text-xl font-semibold">Custom Wishlist</h2>
            <p className="text-gray-600">
              Your personalized property collections
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
