import React from 'react';
import { MdDoubleArrow } from 'react-icons/md';

function TrendingPosts() {
  return (
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
  );
}

export default TrendingPosts;
