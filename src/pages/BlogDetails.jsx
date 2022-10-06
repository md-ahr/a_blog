import React from 'react';
import { MdSearch } from 'react-icons/md';

function BlogDetails() {
  return (
    <div className='py-12 min-h-[calc(100vh-108px)]'>
      <div className='flex justify-between w-full'>
        <div className='w-[65%]'>
          <img className='' src='https://flowbite.com/docs/images/blog/image-1.jpg' alt='' />
        </div>
        <div className='ml-8 p-5 w-[35%] shadow-sm border rounded-sm border-slate-200'>
          <div className='flex items-center border-b border-slate-100 pb-6'>
            <input type='search' className='p-3 w-full bg-slate-200 rounded-bl rounded-tl' placeholder='Search...' />
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button type='button' className='text-white bg-emerald-500 px-4 py-[15px] rounded-tr rounded-br text-lg'><MdSearch /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;
