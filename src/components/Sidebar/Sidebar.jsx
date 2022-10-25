import React from 'react';
import PopularCategories from './PopularCategories';
import PopularTags from './PopularTags';
import Search from './Search';
import TrendingPosts from './TrendingPosts';

function Sidebar() {
  return (
    <div className='mt-6 md:mt-8 lg:mt-0 lg:ml-8 p-5 w-[100%] lg:w-[35%] shadow rounded-sm bg-white'>
      <Search />

      <TrendingPosts />

      <PopularCategories />

      <PopularTags />
    </div>
  );
}

export default Sidebar;
