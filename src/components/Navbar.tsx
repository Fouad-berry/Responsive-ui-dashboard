import Image from 'next/image';
import React from 'react';

const Navbar = () => {
    return (
        <div className='flex items-center justify-between p-4'>
            <div className='hidden md:flex'>
                <Image src="/search.png" alt='' width={14} height={14} />
                <input type="text"  placeholder='Search'/>
            </div>
            <div className=''>

            </div>
        </div>
    );
};

export default Navbar;