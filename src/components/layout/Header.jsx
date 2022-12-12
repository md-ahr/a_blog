import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useAuth from '../../hooks/useAuth';
import { userLoggedOut } from '../../features/auth/authSlice';

function Header() {
  const { pathname } = useLocation();

  const ref = useRef();

  const [isDropdownShow, setIsDropdownShow] = useState(false);
  const [isMenuDropdownShow, setIsMenuDropdownShow] = useState(false);

  const blogId = pathname.split('/')[2];

  const isLoggedIn = useAuth();

  const dispatch = useDispatch();

  const handleDropdown = () => {
    setIsDropdownShow(!isDropdownShow);
  };

  const handleMobileMenu = () => {
    setIsMenuDropdownShow(!isMenuDropdownShow);
  };

  useEffect(() => {
    const clickEvent = document.addEventListener('click', (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsDropdownShow(false);
      }
    });
    return () => {
      document.removeEventListener(clickEvent, () => {});
    };
  }, []);

  const handleLogout = () => {
    dispatch(userLoggedOut());
    localStorage.clear();
  };

  return (
    <nav className='bg-gray-800 sticky top-0 z-10'>
      <div className='mx-auto px-2 sm:px-6 lg:px-8 max-w-[1400px]'>
        <div className='relative flex h-16 items-center justify-between'>
          <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
            <button type='button' className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white' aria-controls='mobile-menu' aria-expanded='false' onClick={handleMobileMenu}>
              <span className='sr-only'>Open main menu</span>
              <svg className='block h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' aria-hidden='true'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
              </svg>
              <svg className='hidden h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' aria-hidden='true'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
              </svg>
            </button>
          </div>
          <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
            <div className='flex flex-shrink-0 items-center mr-auto ml-[40px] md:mr-0 md:ml-0'>
              <NavLink to='/' className='text-white text-xl tracking-widest block h-8 w-auto lg:hidden'>A_BLOG</NavLink>
              <NavLink to='/' className='text-white text-xl tracking-widest hidden h-8 w-auto lg:block'>A_BLOG</NavLink>
            </div>
            <div className='hidden sm:ml-6 sm:block'>
              <div className='flex space-x-4'>
                <NavLink to='/' className={`hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium ${pathname === '/' || pathname === `/blog/${blogId}` ? 'bg-gray-900 text-white' : 'text-gray-300'}`}>Blog</NavLink>
                <NavLink to='/contact' className={`hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium ${pathname === '/contact' ? 'bg-gray-900 text-white' : 'text-gray-300'}`}>Contact</NavLink>
              </div>
            </div>
          </div>
          <div className={`absolute inset-y-0 right-0 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 ${isLoggedIn ? 'flex' : 'hidden'}`}>
            <button type='button' className='rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'>
              <span className='sr-only'>View notifications</span>
              <svg className='h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' aria-hidden='true'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0' />
              </svg>
            </button>
            <div className='relative ml-3'>
              <div>
                <button type='button' className='flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800' id='user-menu-button' aria-expanded='false' aria-haspopup='true' ref={ref} onClick={handleDropdown}>
                  <span className='sr-only'>Open user menu</span>
                  <img className='h-8 w-8 rounded-full' src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' alt='' />
                </button>
              </div>
              {isDropdownShow
              && <div className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none' role='menu' aria-orientation='vertical' aria-labelledby='user-menu-button' tabIndex='-1'>
                <NavLink to='/admin' className='block px-4 py-2 text-sm text-gray-700' role='menuitem' tabIndex='-1' id='user-menu-item-0'>Admin Panel</NavLink>
                <NavLink to='/profile' className='block px-4 py-2 text-sm text-gray-700' role='menuitem' tabIndex='-1' id='user-menu-item-1'>Your Profile</NavLink>
                <NavLink to='/' onClick={handleLogout} className='block px-4 py-2 text-sm text-gray-700' role='menuitem' tabIndex='-1' id='user-menu-item-2'>Sign out</NavLink>
              </div>}
            </div>
          </div>

          <div className={`absolute inset-y-0 right-0 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 ${!isLoggedIn ? 'flex' : 'hidden'}`}>
            <NavLink to='/login' className={`font-medium ml-6 ${pathname === '/login' ? 'text-white bg-emerald-500 px-4 py-2 rounded-full text-sm hover:bg-emerald-600' : 'text-emerald-100'}`}>Login</NavLink>
            <NavLink to='/register' className={`font-medium rounded-full text-sm px-4 ml-6 ${pathname === '/register' ? 'text-white bg-emerald-500 rounded-full py-2 hover:bg-emerald-600' : 'text-emerald-100 border-2 border-emerald-400 py-[6px]'}`}>Register</NavLink>
          </div>
        </div>
      </div>
      {isMenuDropdownShow && <div className='sm:hidden' id='mobile-menu'>
        <div className='space-y-1 px-2 pt-2 pb-3'>
          <NavLink to='/' className={`hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium ${pathname === '/' || pathname === `/blog/${blogId}` ? 'bg-gray-900 text-white' : 'text-gray-300'}`}>Blog</NavLink>
          <NavLink to='/contact' className={`hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium ${pathname === '/contact' ? 'bg-gray-900 text-white' : 'text-gray-300'}`}>Contact</NavLink>
        </div>
      </div>}
    </nav>
  );
}

export default Header;
