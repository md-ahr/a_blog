import React from 'react';
import { MdOutlineArrowRightAlt } from 'react-icons/md';

function PopularCategories() {
  return (
    <div className='border-b border-slate-100 py-6'>
      <p className='text-lg font-medium'>Popular Categories</p>
      <ul className='mt-2'>
        <li className='py-1'>
          <a href='/' className='flex items-center text-slate-600 hover:text-blue-500 transition duration-500 ease'>
            <MdOutlineArrowRightAlt className='mr-1' />
            category one
          </a>
        </li>
        <li className='py-1'>
          <a href='/' className='flex items-center text-slate-600 hover:text-blue-500 transition duration-500 ease'>
            <MdOutlineArrowRightAlt className='mr-1' />
            category two
          </a>
        </li>
        <li className='py-1'>
          <a href='/' className='flex items-center text-slate-600 hover:text-blue-500 transition duration-500 ease'>
            <MdOutlineArrowRightAlt className='mr-1' />
            category three
          </a>
        </li>
        <li className='py-1'>
          <a href='/' className='flex items-center text-slate-600 hover:text-blue-500 transition duration-500 ease'>
            <MdOutlineArrowRightAlt className='mr-1' />
            category four
          </a>
        </li>
      </ul>
    </div>
  );
}

export default PopularCategories;
