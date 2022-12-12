import React from 'react';
import { MdEditNote, MdOutlineDeleteSweep } from 'react-icons/md';

function Admin() {
  return (
    <div className='py-8 min-h-[calc(100vh-489px)]'>
      <div className='flex items-start'>
        <div className='py-5 px-6 w-[300px] bg-white shadow rounded'>
          <a href='/' className='block'>Categories</a>
          <a href='/' className='mt-4 block'>Tags</a>
          <a href='/' className='mt-4 block'>Blogs</a>
          <a href='/' className='mt-4 block'>Users</a>
          <a href='/' className='mt-4 block'>Comments</a>
        </div>
        <div className='ml-12 w-[calc(100%-300px)]'>
          <form>
            <div className=''>
              <label htmlFor='category' className='pb-3 block text-slate-700 font-medium'>Category Name</label>
              <input type='category' name='category' id='category' className='py-3 w-full px-4 border border-slate-300 rounded-sm' />
            </div>
            <div className='mt-6'>
              <button type='button' className='py-3 px-9 bg-emerald-400 text-white font-medium rounded hover:bg-emerald-500 cursor-pointer ease-in-out duration-300'>Add Category</button>
            </div>
          </form>
          <table className='mt-10 w-full bg-white shadow text-center rounded'>
            <thead className='bg-slate-100'>
              <tr>
                <th className='py-4 text-sm'>SL No</th>
                <th className='py-4 text-sm'>Category Name</th>
                <th className='py-4 text-sm'>Created Date</th>
                <th className='py-4 text-sm'>Updated Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className='border-b'>
                <td className='py-4 text-sm'>1</td>
                <td className='py-4 text-sm'>cat 1</td>
                <td className='py-4 text-sm'>12-12-2022</td>
                <td className='py-4 text-sm'>12-12-2022</td>
                <td className='py-4 flex items-center justify-center'>
                  <a href='/' className='p-0 text-xl text-blue-600'><MdEditNote /></a>
                  <button type='button' className='ml-4 text-xl text-red-600'><MdOutlineDeleteSweep /></button>
                </td>
              </tr>
              <tr className='border-b'>
                <td className='py-4 text-sm'>1</td>
                <td className='py-4 text-sm'>cat 2</td>
                <td className='py-4 text-sm'>12-12-2022</td>
                <td className='py-4 text-sm'>12-12-2022</td>
                <td className='py-4 flex items-center justify-center'>
                  <a href='/' className='p-0 text-xl text-blue-600'><MdEditNote /></a>
                  <button type='button' className='ml-4 text-xl text-red-600'><MdOutlineDeleteSweep /></button>
                </td>
              </tr>
              <tr className='border-b'>
                <td className='py-4 text-sm'>1</td>
                <td className='py-4 text-sm'>cat 3</td>
                <td className='py-4 text-sm'>12-12-2022</td>
                <td className='py-4 text-sm'>12-12-2022</td>
                <td className='py-4 flex items-center justify-center'>
                  <a href='/' className='p-0 text-xl text-blue-600'><MdEditNote /></a>
                  <button type='button' className='ml-4 text-xl text-red-600'><MdOutlineDeleteSweep /></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Admin;
