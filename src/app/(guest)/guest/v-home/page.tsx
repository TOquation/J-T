import { LocateIcon, Map, MapPin, SearchIcon } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <div className='font-poppins'>
        <section>
    <div className='text-center p-5'>
      <p className='text-[#f99c1c] text-2xl font-bold'>5% <span className='text-lg'>off</span> </p>
      <p>Book up to 4 nights and enjoy 5% off</p>
      <p className='flex space-x-1'>
        <MapPin /> Lagos, Nigeria
      </p>
      <div className='flex items-center space-x-2'>
        <SearchIcon />
        <input type="search" name="Search" id="" placeholder='Start your search' />
      </div>
    </div>
        </section>
    </div>
  )
}

export default page
