/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import formSchema from '../utils/ValidationSchema';
import { useRegisterMutation } from '../features/auth/authApi';
import loginImage from '../assets/images/login-register.svg';

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: 'onTouched', resolver: yupResolver(formSchema) });

  const [registerUser, { data, isLoading, error: responseError }] = useRegisterMutation();

  const navigate = useNavigate();

  useEffect(() => {
    if (responseError?.data) {
      toast.error('Registration failed! Please try again...');
    }
    if (data?.accessToken && data?.user) {
      navigate('/');
    }
  }, [data, responseError, navigate]);

  const handleRegisterSubmit = (user) => {
    registerUser({
      name: user?.name,
      email: user?.email,
      password: user?.password,
    });
    toast.success('Registration completed successfully!');
    reset();
  };

  return (
    <div className='py-8 sm:py-12 flex justify-center items-center min-h-[calc(100vh-108px)]'>
      <form onSubmit={handleSubmit(handleRegisterSubmit)} className='w-full max-w-[600px] py-6 px-8 sm:py-10 sm:px-12 bg-white shadow-sm rounded-sm'>
        <p className='mb-6 text-center text-[18px] sm:text-[25px] uppercase font-medium'>Join for awesome contents</p>
        <img src={loginImage} className='w-[145px] mx-auto drop-shadow-[0_0_45px_rgba(0,255,255,0.1)]' alt='login' />
        <div className='mt-4 sm:mt-6'>
          <label htmlFor='name' className='pb-2 block text-slate-700 font-medium'>Name</label>
          <input
            type='text'
            name='name'
            id='name'
            className={`py-3 px-4 border border-slate-300 rounded-sm w-full focus:outline-none focus:border-slate-600 ${errors.name && 'border-red-500'}`}
            {...register('name')}
          />
          {errors?.name && <p className='mt-1 text-sm text-red-500'>{errors?.name?.message}</p>}
        </div>
        <div className='mt-3 sm:mt-5'>
          <label htmlFor='email' className='pb-2 block text-slate-700 font-medium'>
            Email
            <span className='ml-1 text-red-500 text-sm'>*</span>
          </label>
          <input
            type='email'
            name='email'
            id='email'
            className={`py-3 px-4 border border-slate-300 rounded-sm w-full focus:outline-none focus:border-slate-600 ${errors.email && 'border-red-500'}`}
            {...register('email')}
          />
          {errors?.email && <p className='mt-1 text-sm text-red-500'>{errors?.email?.message}</p>}
        </div>
        <div className='mt-3 sm:mt-5'>
          <label htmlFor='password' className='pb-2 block text-slate-700 font-medium'>
            Password
            <span className='ml-1 text-red-500 text-sm'>*</span>
          </label>
          <input
            type='password'
            name='password'
            id='password'
            className={`py-3 px-4 border border-slate-300 rounded-sm w-full focus:outline-none focus:border-slate-600 ${errors.password && 'border-red-500'}`}
            {...register('password')}
          />
          {errors?.password && <p className='mt-1 text-sm text-red-500'>{errors?.password?.message}</p>}
        </div>
        <div className='mt-3 sm:mt-5'>
          <label htmlFor='confirmPassword' className='pb-2 block text-slate-700 font-medium'>
            Confirm Password
            <span className='ml-1 text-red-500 text-sm'>*</span>
          </label>
          <input
            type='password'
            name='confirmPassword'
            id='confirmPassword'
            className={`py-3 px-4 border border-slate-300 rounded-sm w-full focus:outline-none focus:border-slate-600 ${errors.confirmPassword && 'border-red-500'}`}
            {...register('confirmPassword')}
          />
          {errors.confirmPassword && <p className='mt-1 text-sm text-red-500'>Password does not match</p>}
        </div>
        <div className='mt-5 sm:mt-7'>
          <button
            type='submit'
            className='py-3 px-9 bg-emerald-400 text-white font-medium rounded hover:bg-emerald-500 cursor-pointer ease-in-out duration-300'
            disabled={isLoading}
          >
            Submit
          </button>
        </div>
        <p className='mt-4 sm:mt-6 text-slate-600 text-sm'>
          Already have an account? Please
          <NavLink to='/login' className='ml-1 text-blue-500 font-medium'>Login</NavLink>
        </p>
      </form>
    </div>
  );
}

export default Register;
