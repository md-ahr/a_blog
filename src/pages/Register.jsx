import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useRegisterMutation } from '../features/auth/authApi';
import loginImage from '../assets/images/login-register.svg';

function Register() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');

  const [register, { data, isLoading, error: responseError }] = useRegisterMutation();

  const navigate = useNavigate();

  useEffect(() => {
    if (responseError?.data) {
      setError(responseError.data);
    }
    if (data?.accessToken && data?.user) {
      navigate('/');
    }
  }, [data, responseError, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...data, [name]: value });
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (user?.confirmPassword !== user?.password) {
      setError('passwords do not match');
    } else {
      register({
        name: user?.name,
        email: user?.email,
        password: user?.password,
      });
    }
  };

  return (
    <div className='py-6 sm:py-8 flex justify-center items-center min-h-[calc(100vh-108px)]'>
      <form onSubmit={handleRegisterSubmit} className='w-full max-w-[600px] py-6 px-8 sm:py-10 sm:px-12 bg-white shadow-sm rounded-sm'>
        {error !== '' && <p>Error...</p>}
        <p className='mb-6 text-center text-[18px] sm:text-[25px] uppercase font-medium'>Join for awesome contents</p>
        <img src={loginImage} className='w-[145px] mx-auto drop-shadow-[0_0_45px_rgba(0,255,255,0.1)]' alt='login' />
        <div className='mt-4 sm:mt-6'>
          <label htmlFor='name' className='pb-2 block text-slate-700 font-medium'>Name</label>
          <input type='text' name='name' value={user?.name} onChange={handleInputChange} id='name' className='py-3 px-4 border border-slate-300 rounded-sm w-full' />
        </div>
        <div className='mt-3 sm:mt-5'>
          <label htmlFor='email' className='pb-2 block text-slate-700 font-medium'>Email</label>
          <input type='email' name='email' value={user?.email} onChange={handleInputChange} id='email' className='py-3 px-4 border border-slate-300 rounded-sm w-full' />
        </div>
        <div className='mt-3 sm:mt-5'>
          <label htmlFor='password' className='pb-2 block text-slate-700 font-medium'>Password</label>
          <input type='password' name='password' value={user?.password} onChange={handleInputChange} id='password' className='py-3 px-4 border border-slate-300 rounded-sm w-full' />
        </div>
        <div className='mt-3 sm:mt-5'>
          <label htmlFor='confirmPassword' className='pb-2 block text-slate-700 font-medium'>Confirm Password</label>
          <input type='password' name='confirmPassword' value={user?.confirmPassword} onChange={handleInputChange} id='confirmPassword' className='py-3 px-4 border border-slate-300 rounded-sm w-full' />
        </div>
        <div className='mt-5 sm:mt-7'>
          <button type='submit' className='py-3 px-9 bg-emerald-400 text-white font-medium rounded hover:bg-emerald-500 cursor-pointer ease-in-out duration-300' disabled={isLoading}>Submit</button>
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
