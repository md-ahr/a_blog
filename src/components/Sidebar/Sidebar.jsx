import React from 'react';
import { MdDoubleArrow, MdOutlineArrowRightAlt, MdSearch } from 'react-icons/md';

function Sidebar() {
  return (
    <div className='mt-6 md:mt-8 lg:mt-0 lg:ml-8 p-5 w-[100%] lg:w-[35%] shadow rounded-sm bg-white'>
      <div className='flex items-center border-b border-slate-100 pb-8 py-2'>
        <input type='search' className='p-3 w-full bg-slate-200 rounded-bl rounded-tl' placeholder='Search...' />
        <button type='button' className='text-white bg-emerald-500 px-4 py-[15px] rounded-tr rounded-br text-lg'><MdSearch /></button>
      </div>

      <div className='border-b border-slate-100 py-6'>
        <p className='text-lg font-medium'>Trending Posts</p>
        <ul className='mt-2'>
          <li className='py-1'>
            <a href='/' className='flex items-center text-slate-600 hover:text-blue-500 transition duration-500 ease'>
              <MdDoubleArrow className='mr-1' />
              Noteworthy technology acquisitions 2021
            </a>
          </li>
          <li className='py-1'>
            <a href='/' className='flex items-center text-slate-600 hover:text-blue-500 transition duration-500 ease'>
              <MdDoubleArrow className='mr-1' />
              Noteworthy technology acquisitions 2021
            </a>
          </li>
          <li className='py-1'>
            <a href='/' className='flex items-center text-slate-600 hover:text-blue-500 transition duration-500 ease'>
              <MdDoubleArrow className='mr-1' />
              Noteworthy technology acquisitions 2021
            </a>
          </li>
          <li className='py-1'>
            <a href='/' className='flex items-center text-slate-600 hover:text-blue-500 transition duration-500 ease'>
              <MdDoubleArrow className='mr-1' />
              Noteworthy technology acquisitions 2021
            </a>
          </li>
          <li className='py-1'>
            <a href='/' className='flex items-center text-slate-600 hover:text-blue-500 transition duration-500 ease'>
              <MdDoubleArrow className='mr-1' />
              Noteworthy technology acquisitions 2021
            </a>
          </li>
        </ul>
      </div>

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

      <div className='py-6'>
        <p className='text-lg font-medium'>Popular Tags</p>
        <ul className='mt-4 flex items-center flex-wrap gap-4'>
          <a href='/' className='px-6 py-2 text-slate-600 border border-slate-400 rounded-full hover:text-white hover:bg-blue-500 transition duration-500 ease'>
            tags
          </a>
          <a href='/' className='px-6 py-2 text-slate-600 border border-slate-400 rounded-full hover:text-white hover:bg-blue-500 transition duration-500 ease'>
            tags
          </a>
          <a href='/' className='px-6 py-2 text-slate-600 border border-slate-400 rounded-full hover:text-white hover:bg-blue-500 transition duration-500 ease'>
            tags
          </a>
          <a href='/' className='px-6 py-2 text-slate-600 border border-slate-400 rounded-full hover:text-white hover:bg-blue-500 transition duration-500 ease'>
            tags
          </a>
          <a href='/' className='px-6 py-2 text-slate-600 border border-slate-400 rounded-full hover:text-white hover:bg-blue-500 transition duration-500 ease'>
            tags
          </a>
          <a href='/' className='px-6 py-2 text-slate-600 border border-slate-400 rounded-full hover:text-white hover:bg-blue-500 transition duration-500 ease'>
            tags
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
