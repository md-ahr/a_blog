import React from 'react';

function RelatedTags() {
  return (
    <div className='mt-8'>
      <p className='text-xl font-medium text-slate-700'>Related Tags</p>
      <div className='flex items-center mt-4 gap-4'>
        <a href='/' className='text-sm px-6 py-2 text-slate-600 border border-slate-400 rounded-full hover:text-white hover:bg-blue-500 transition duration-500 ease'>
          tags 1
        </a>
        <a href='/' className='text-sm px-6 py-2 text-slate-600 border border-slate-400 rounded-full hover:text-white hover:bg-blue-500 transition duration-500 ease'>
          tags 2
        </a>
        <a href='/' className='text-sm px-6 py-2 text-slate-600 border border-slate-400 rounded-full hover:text-white hover:bg-blue-500 transition duration-500 ease'>
          tags 3
        </a>
      </div>
    </div>
  );
}

export default RelatedTags;
