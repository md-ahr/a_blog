import React from 'react';
import { MdThumbDownOffAlt, MdThumbUpOffAlt } from 'react-icons/md';

function LikeDislike() {
  return (
    <div className='flex items-center mt-8'>
      <p className='flex items-center text-slate-500'>
        <MdThumbUpOffAlt className='text-2xl cursor-pointer' />
        <span className='text-xs ml-1'>(12)</span>
      </p>
      <p className='flex items-center text-slate-500 ml-5'>
        <MdThumbDownOffAlt className='text-2xl cursor-pointer' />
        <span className='text-xs ml-1'>(3)</span>
      </p>
    </div>
  );
}

export default LikeDislike;
