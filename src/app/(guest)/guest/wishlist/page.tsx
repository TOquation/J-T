'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function page() {
  return (
    <div className="p-6">
      <h1 className="mb-6 text-2xl font-bold">Wishlists</h1>
      <div className="flex items-center space-x-6">
        {/* General Wishlist Card */}
        <Link href="/guest/wishlist/general">
          <div className="cursor-pointer rounded-2xl">
            <div className='bg-white shadow-md rounded-2xl p-4'>
              <div className="relative w-[240px] h-[250px]">
                <Image 
                    src="/images/wishlist_img.png" 
                    alt="General"
                    width={240}
                    height={250}
                    className="rounded-2xl object-cover h-full w-full"
                />
              </div>
            </div>
            <h2 className="mt-4 text-xl font-semibold">General</h2>
            <p className="text-gray-600">
              5 saved
            </p>
          </div>
        </Link>

        {/* Custom Wishlist Card */}
        <Link href="/guest/wishlist/custom">
          <div className="cursor-pointer rounded-2xl">
            <div className='bg-white shadow-md p-4 rounded-2xl'>
              <div className="relative w-[240px] h-[250px]">
                <div className="grid grid-cols-2 h-full">
                  <div className='relative'>
                    <Image 
                      src="/images/wishlist_img.png" 
                      alt="Your Categories"
                      width={240}
                      height={250}
                      className="rounded-tl-2xl object-cover h-full w-full"
                    />
                  </div>

                  <div className='relative'>
                    <Image 
                      src="/images/wishlist_img.png" 
                      alt="Your Categories"
                      width={240}
                      height={250}
                      className="rounded-tr-2xl object-cover h-full w-full"
                    />
                  </div>

                  <div className='relative'>
                    <Image 
                      src="/images/wishlist_img.png" 
                      alt="Your Categories"
                      width={240}
                      height={250}
                      className="rounded-bl-2xl object-cover h-full w-full"
                    />
                  </div>

                  <div className='relative'>
                    <Image 
                      src="/images/wishlist_img.png" 
                      alt="Your Categories"
                      width={240}
                      height={250}
                      className="rounded-br-2xl object-cover h-full w-full"
                    />
                  </div>
              </div>
            </div>
            </div>
            <h2 className="mt-4 text-xl font-semibold">Your Categories</h2>
            <p className="text-gray-600">
              32 saved
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

