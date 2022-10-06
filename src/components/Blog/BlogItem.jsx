import React from 'react';
import { NavLink } from 'react-router-dom';

function BlogItem() {
  const id = 1;

  return (
    <div className='max-w-lg min-h-[calc(100vh-108px)]'>
      <div className='bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5'>
        <NavLink to={`/blog/${id}`}>
          <img className='rounded-t-lg' src='https://flowbite.com/docs/images/blog/image-1.jpg' alt='' />
        </NavLink>
        <div className='pt-4 px-5 text-sm flex justify-between items-center'>
          <p className='text-slate-500'>Abdul Halim</p>
          <p className='text-slate-400'>23rd March, 2022</p>
        </div>
        <div className='py-3 pb-5 px-5'>
          <NavLink to={`/blog/${id}`}>
            <h5 className='text-gray-900 font-bold text-xl tracking-tight mb-2'>Noteworthy technology acquisitions 2021</h5>
          </NavLink>
          <p className='font-normal text-gray-700 mb-3'>Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          <NavLink to={`/blog/${id}`} className='text-white bg-emerald-500 hover:bg-emerald-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center mx-auto'>
            Read more
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default BlogItem;
