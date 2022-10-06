import React from 'react';

function Contact() {
  return (
    <div className='flex items-center justify-center min-h-[calc(100vh-108px)]'>
      <div className='w-full max-w-xl px-10 py-8 mx-auto bg-white rounded-lg shadow-lg'>
        <div className='max-w-xl mx-auto space-y-6'>
          <form>
            <h2 className='text-2xl font-bold '>Contact Us</h2>
            <p className='my-4 opacity-70'>Adipisicing elit. Quibusdam magnam sed ipsam deleniti debitis laboriosam praesentium dolorum doloremque beata.</p>
            <hr className='my-6' />
            <label htmlFor='name' className='uppercase text-sm font-bold opacity-70'>Name</label>
            <input type='text' name='name' className='p-3 mt-2 mb-4 w-full bg-slate-200 rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none' />
            <label htmlFor='email' className='uppercase text-sm font-bold opacity-70'>Email</label>
            <input type='text' name='email' className='p-3 mt-2 mb-4 w-full bg-slate-200 rounded' />
            <label htmlFor='message' className='uppercase text-sm font-bold opacity-70'>Message</label>
            <textarea name='message' rows='5' className='p-3 mt-2 mb-4 w-full bg-slate-200 rounded' />
            <input type='submit' className='py-3 px-6 my-2 bg-emerald-500 text-white font-medium rounded hover:bg-indigo-500 cursor-pointer ease-in-out duration-300' value='Send' />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
