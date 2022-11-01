import React from 'react';
import { MdPhone, MdMailOutline } from 'react-icons/md';
import { IoLogoGithub } from 'react-icons/io5';
import { NavLink, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

function Footer() {
  const { pathname } = useLocation();

  return (
    <>
      <div className={`py-12 bg-slate-100 border-t ${(pathname === '/login' || pathname === '/register') ? 'hidden' : ''}`}>
        <div className='mx-auto px-2 sm:px-6 lg:px-8 max-w-[1400px] flex items-start justify-between flex-wrap'>
          <div className='basis-full sm:basis-1/4'>
            <NavLink to='/' className='text-slate-600 text-xl tracking-widest block font-bold'>A_BLOG</NavLink>
            <p className='mt-4 text-slate-500'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam nemo odit veritatis
              libero, atque sunt blanditiis natus rerum, cumque adipisci quasi at nihil doloremque
              animi sed maxime soluta quaerat sequi.
            </p>
            <p className='mt-8 flex items-center text-slate-600 font-medium'>
              <MdPhone />
              <span className='ml-1'>+880 1777335813</span>
            </p>
            <a href='mailto:ahr.web.pro@gmail.com' className='mt-2 flex items-center text-slate-600 font-medium hover:text-sky-600'>
              <MdMailOutline />
              <span className='ml-2'>ahr.web.pro@gmail.com</span>
            </a>
            <a href='https://github.com/md-ahr' target='_blank' rel='noreferrer' className='mt-2 flex items-center text-slate-600 font-medium hover:text-sky-600'>
              <IoLogoGithub />
              <span className='ml-2'>https://github.com/md-ahr</span>
            </a>
          </div>
          <div className='mt-8 sm:mt-0 basis-full sm:basis-1/4'>
            <p className='text-slate-700 text-lg font-medium'>Quick Links</p>
            <ul className='mt-4'>
              <li className='mt-3'>
                <NavLink to='/blog' className='text-slate-600 hover:text-sky-600 transition duration-300 ease'>Blog</NavLink>
              </li>
              <li className='mt-3'>
                <NavLink to='/contact' className='text-slate-600 hover:text-sky-600 transition duration-300 ease'>Contact</NavLink>
              </li>
              <li className='mt-3'>
                <NavLink to='/login' className='text-slate-600 hover:text-sky-600 transition duration-300 ease'>Login</NavLink>
              </li>
              <li className='mt-3'>
                <NavLink to='/register' className='text-slate-600 hover:text-sky-600 transition duration-300 ease'>Register</NavLink>
              </li>
              <li className='mt-3'>
                <NavLink to='/faq' className='text-slate-600 hover:text-sky-600 transition duration-300 ease'>FAQ</NavLink>
              </li>
              <li className='mt-3'>
                <NavLink to='/faq' className='text-slate-600 hover:text-sky-600 transition duration-300 ease'>Terms & Conditions</NavLink>
              </li>
            </ul>
          </div>
          <div className='mt-8 sm:mt-0 basis-full sm:basis-1/4'>
            <p className='text-slate-700 text-lg font-medium'>Popular Categories</p>
            <ul className='mt-4'>
              <li className='mt-3'>
                <NavLink to='/' className='text-slate-600 hover:text-sky-600 transition duration-300 ease'>Noteworthy technology acquisitions 2021</NavLink>
              </li>
              <li className='mt-3'>
                <NavLink to='/' className='text-slate-600 hover:text-sky-600 transition duration-300 ease'>Noteworthy technology acquisitions 2021</NavLink>
              </li>
              <li className='mt-3'>
                <NavLink to='/' className='text-slate-600 hover:text-sky-600 transition duration-300 ease'>Noteworthy technology acquisitions 2021</NavLink>
              </li>
              <li className='mt-3'>
                <NavLink to='/' className='text-slate-600 hover:text-sky-600 transition duration-300 ease'>Noteworthy technology acquisitions 2021</NavLink>
              </li>
              <li className='mt-3'>
                <NavLink to='/' className='text-slate-600 hover:text-sky-600 transition duration-300 ease'>Noteworthy technology acquisitions 2021</NavLink>
              </li>
              <li className='mt-3'>
                <NavLink to='/' className='text-slate-600 hover:text-sky-600 transition duration-300 ease'>Noteworthy technology acquisitions 2021</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='bg-slate-200 text-slate-500 text-center'>
        <p className='py-3 text-sm'>
          &copy; 2022
          <a href='https://github.com/md-ahr' className='mx-1 font-medium hover:text-[#0d6efd]' target='_blank' rel='noreferrer'>Abdul Halim</a>
          all rights reserved
        </p>
      </div>
      <Toaster />
    </>
  );
}

export default Footer;
