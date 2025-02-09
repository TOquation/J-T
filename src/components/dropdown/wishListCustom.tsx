'use client'

import React from 'react'
import { useState } from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
        StickyNote,
        MoreHorizontal,
        Trash2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { Input } from "@/components/ui/input"

const WishListCustom = () => {
const [open, setOpen] = useState(false);
  return (
    <div>
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    className="flex items-center rounded-2xl py-[6px] px-[20px] 
                    border border-red-600 text-red-600 
                  hover:border-red-600 focus:border-red-600 active:border-red-600 
                    hover:bg-transparent focus:bg-transparent active:bg-transparent" 
                    variant="outline">
                    <MoreHorizontal 
                    size={24}
                    className='text-red-600'
                    />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='flex flex-col space-y-4 w-64 py-4 rounded-2xl mt-4 ' align='end'>

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <DropdownMenuItem className='cursor-pointer hover:bg-transparent focus:bg-transparent active:bg-transparent' onClick={(e) =>{
                        e.preventDefault();
                        setOpen(true)
                    }}>
                        <div className='p-2 rounded-lg inline-block bg-gray-100'>
                        <StickyNote 
                        size={30} 
                        className=''/> 
                        </div>
                        <span className='ml-3 text-[18px]'>Rename Category</span>
                    </DropdownMenuItem>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px] p-8 [&>button]:hidden py-20" >

                    <div className='relative flex flex-col items-center justify-center space-y-6'>


                        <DialogHeader>
                            <DialogTitle className='absolute top-[-10px] left-[70px] text-gray-500 text-lg '>
                                Rename Category
                            </DialogTitle>
                        </DialogHeader>

                        <div className="w-3/4 grid gap-2 ">
                            <Input 
                                id="category" 
                                defaultValue="Lagos visit" 
                                className="border border-orange-500 focus:ring-0 focus:outline-none focus:border-orange-500 rounded-lg px-4 py-6" 
                            />
                            <p className="text-gray-500 text-sm">8/100 character</p>
                        </div>

                    </div>

                    
                    <DialogFooter className="flex justify-between gap-4 mt-8">
                    <Button 
                        variant="outline"
                        className='flex-1 border-orange-600 text-orange-600 hover:bg-transparent hover:border-orange-500 rounded-lg px-6 py-6 font-bold text-[18px]'
                        onClick={() => setOpen(false)}
                    >
                        cancel  
                    </Button>

                    <Button
                        className="flex-1 bg-orange-500 hover:bg-orange-600 text-white rounded-lg px-6 py-6 font-bold text-[18px]"
                        onClick={() => setOpen(false)}
                    >
                       Save
                    </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            <DropdownMenuItem className='cursor-pointer text-red-600 bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent'>
                <div className='p-2 rounded-lg inline-block bg-gray-100'>
                <Trash2  
                size={30}
                className='text-red-600'
                />
                </div>
                <span className='ml-3 text-[18px] text-red-600'>
                Delete Category
                </span>
            </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

        
    </div>
  )
}

export default WishListCustom














