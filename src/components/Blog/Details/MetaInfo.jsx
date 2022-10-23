import React from 'react';
import { MdCircle } from 'react-icons/md';

function MetaInfo() {
  return (
    <div className='flex items-center mt-6'>
      <img src='https://www.pngitem.com/pimgs/m/130-1300253_female-user-icon-png-download-user-image-color.png' className='w-12 rounded-full' alt='author' />
      <div className='ml-4'>
        <p className='text-slate-700 font-medium'>Abdul Halim</p>
        <p className='flex items-center text-sm text-slate-500'>
          Posted on May 10, 2022
          <MdCircle className='mx-2 text-[6px]' />
          6 min read
        </p>
      </div>
    </div>
  );
}

export default MetaInfo;
