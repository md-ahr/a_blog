import React from 'react';
import { MdSearch } from 'react-icons/md';

function Search() {
  return (
    <div className='flex items-center border-b border-slate-100 pb-8 py-2'>
      <input type='search' className='p-3 w-full bg-slate-200 rounded-bl rounded-tl' placeholder='Search...' />
      <button type='button' className='text-white bg-emerald-500 px-4 py-[15px] rounded-tr rounded-br text-lg'><MdSearch /></button>
    </div>
  );
}

export default Search;
