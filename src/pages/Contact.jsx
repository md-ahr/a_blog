import React from 'react';
import contactImage from '../assets/images/contact.svg';

function Contact() {
  return (
    <div className='py-6 sm:py-8 flex items-center justify-center min-h-[calc(100vh-108px)]'>
      <div className='w-full max-w-[600px] px-6 py-6 sm:px-10 sm:py-8 mx-auto bg-white shadow-sm rounded-sm'>
        <div className='max-w-xl mx-auto space-y-6'>
          <form>
            <p className='mb-6 text-center text-[18px] sm:text-[25px] uppercase font-medium'>Don'y Hesitate to Contact</p>
            <img src={contactImage} className='w-[290px] mx-auto drop-shadow-[0_0_45px_rgba(0,255,255,0.1)]' alt='contact' />
            <div className='mt-4 sm:mt-6'>
              <label htmlFor='name' className='pb-2 block text-slate-700 font-medium'>Name</label>
              <input type='text' name='name' className='py-3 px-4 border border-slate-300 rounded-sm w-full' />
            </div>
            <div className='mt-3 sm:mt-5'>
              <label htmlFor='email' className='pb-2 block text-slate-700 font-medium'>Email</label>
              <input type='text' name='email' className='py-3 px-4 border border-slate-300 rounded-sm w-full' />
            </div>
            <div className='mt-3 sm:mt-5'>
              <label htmlFor='message' className='pb-2 block text-slate-700 font-medium'>Message</label>
              <textarea name='message' rows='5' className='py-3 px-4 border border-slate-300 rounded-sm w-full' />
            </div>
            <div className='mt-5 sm:mt-7'>
              <button type='submit' className='py-3 px-9 bg-emerald-400 text-white font-medium rounded hover:bg-emerald-500 cursor-pointer ease-in-out duration-300'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
