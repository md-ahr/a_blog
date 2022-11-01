import React from 'react';
import { MdCircle } from 'react-icons/md';

function Comment() {
  return (
    <div className='mt-8'>
      <p className='text-xl text-slate-700 font-medium'>Comments</p>
      <div className='mt-6 mb-10'>
        <div className='flex items-center'>
          <img src='https://www.pngitem.com/pimgs/m/130-1300253_female-user-icon-png-download-user-image-color.png' alt='user' className='w-12 rounded-full' />
          <div className='ml-4'>
            <p className='text-slate-700'>Easy to use resource full overall a good tool for developers</p>
            <p className='mt-1 flex items-center text-slate-500 text-sm'>
              Abdul Halim
              <MdCircle className='mx-2 text-[6px]' />
              Oct 10, 2022
            </p>
          </div>
        </div>
        <div className='reply ml-14 mt-6 flex items-center'>
          <img src='https://www.pngitem.com/pimgs/m/130-1300253_female-user-icon-png-download-user-image-color.png' alt='user' className='w-12 rounded-full' />
          <div className='ml-4'>
            <p className='text-slate-700'>Easy to use resource full overall a good tool for developers</p>
            <p className='mt-1 flex items-center text-slate-500 text-sm'>
              Abdul Halim
              <MdCircle className='mx-2 text-[6px]' />
              Oct 10, 2022
            </p>
          </div>
        </div>
        <div className='mt-6 flex items-center'>
          <img src='https://www.pngitem.com/pimgs/m/130-1300253_female-user-icon-png-download-user-image-color.png' alt='user' className='w-12 rounded-full' />
          <div className='ml-4'>
            <p className='text-slate-700'>Easy to use resource full overall a good tool for developers</p>
            <p className='mt-1 flex items-center text-slate-500 text-sm'>
              Abdul Halim
              <MdCircle className='mx-2 text-[6px]' />
              Oct 10, 2022
            </p>
          </div>
        </div>
      </div>
      <form className='mt-4 py-6 px-8 border border-slate-300 rounded'>
        <div className='flex items-center flex-wrap'>
          <div className='basis-full sm:basis-[47.5%]'>
            <label htmlFor='name' className='block text-slate-700 pb-2'>Name</label>
            <input type='text' name='name' id='name' className='py-3 px-4 border border-slate-300 rounded-sm w-full' />
          </div>
          <div className='mt-4 basis-full sm:basis-[47.5%] sm:ml-6 sm:mt-0'>
            <label htmlFor='email' className='block text-slate-700 pb-2'>Email</label>
            <input type='email' name='email' id='email' className='py-3 px-4 border border-slate-300 rounded-sm w-full' />
          </div>
        </div>
        <div className='mt-4'>
          <label htmlFor='message' className='block text-slate-700 pb-2'>Message</label>
          <textarea name='message' id='message' rows='5' className='py-3 px-4 border border-slate-300 rounded-sm w-full' />
        </div>
        <div className='mt-5 text-right'>
          <button type='submit' className='py-2 px-6 border border-emerald-400 text-emerald-500 rounded hover:bg-emerald-400 hover:text-white transition duration-500 ease'>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Comment;
