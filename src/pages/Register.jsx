import React from 'react';
import { NavLink } from 'react-router-dom';
import loginImage from '../assets/images/login-register.svg';

function Register() {
  return (
    <div className='py-6 sm:py-8 flex justify-center items-center min-h-[calc(100vh-108px)]'>
      <form className='w-full max-w-[600px] py-6 px-8 sm:py-10 sm:px-12 bg-white shadow-sm rounded-sm'>
        <p className='mb-6 text-center text-[18px] sm:text-[25px] uppercase font-medium'>Join for awesome contents</p>
        <img src={loginImage} className='w-[145px] mx-auto drop-shadow-[0_0_45px_rgba(0,255,255,0.1)]' alt='login' />
        <div className='mt-4 sm:mt-6'>
          <label htmlFor='name' className='pb-2 block text-slate-700 font-medium'>Name</label>
          <input type='text' name='name' id='name' className='py-3 px-4 border border-slate-300 rounded-sm w-full' />
        </div>
        <div className='mt-3 sm:mt-5'>
          <label htmlFor='email' className='pb-2 block text-slate-700 font-medium'>Email</label>
          <input type='email' name='email' id='email' className='py-3 px-4 border border-slate-300 rounded-sm w-full' />
        </div>
        <div className='mt-3 sm:mt-5'>
          <label htmlFor='password' className='pb-2 block text-slate-700 font-medium'>Password</label>
          <input type='password' name='password' id='password' className='py-3 px-4 border border-slate-300 rounded-sm w-full' />
        </div>
        <div className='mt-3 sm:mt-5'>
          <label htmlFor='confirmPassword' className='pb-2 block text-slate-700 font-medium'>Confirm Password</label>
          <input type='password' name='confirmPassword' id='confirmPassword' className='py-3 px-4 border border-slate-300 rounded-sm w-full' />
        </div>
        <div className='mt-5 sm:mt-7'>
          <button type='submit' className='py-3 px-9 bg-emerald-400 text-white font-medium rounded hover:bg-emerald-500 cursor-pointer ease-in-out duration-300'>Submit</button>
        </div>
        <p className='mt-4 sm:mt-6 text-slate-600 text-sm'>
          Already have an account? Please
          <NavLink to='/login' className='ml-1 text-blue-500'>Login</NavLink>
        </p>
      </form>
    </div>
  );
}

export default Register;