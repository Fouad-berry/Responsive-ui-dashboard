import Image from 'next/image';
import React from 'react';

const Navbar = () => {
    return (
        <div className='flex items-center justify-between p-4'>
            <div className='hidden md:flex items-center gap-2 text-xs rounded-full'>
                <Image src="/search.png" alt='' width={14} height={14} />
                <input type="text"  placeholder='Search...'/>
            </div>
            <div className='flex items-center gap-6'>
                <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer'>
                    <Image src="/message.png" alt='messages' width={20} height={20} />
                </div>
                <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative'>
                    <Image src="/announcement.png" alt='messages' width={20} height={20} />
                    <div className='absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-blue-500 text-white rounded-full'>10</div>
                </div>
                <div className='flex flex-col'>
                    <span className='text-xs leading-3 font-medium'>Fouad</span>
                    <span className='text-[10px] text-gray-500 text-right'>Admin</span>
                </div>
                <Image src="/avatar.png" alt='' width={36} height={36} className='rounded-full' />
            </div>
        </div>
    );
};

export default Navbar;