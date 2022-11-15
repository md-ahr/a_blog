import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className='py-8 sm:py-12 grid justify-center content-center text-center min-h-[calc(100vh-490px)]'>
      <p className='text-8xl font-medium text-orange-500'>404!</p>
      <p className='my-3 text-xl font-medium text-slate-600'>Page not found, please try another resources.</p>
      <div className='mt-6'>
        <Link to='/' className='py-3 px-9 text-lg text-white bg-emerald-400 border rounded font-medium w-5'>Go Home</Link>
      </div>
    </div>
  );
}

export default NotFound;
