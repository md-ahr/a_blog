import React from 'react';
import BlogList from '../components/Blog/BlogList';
import Pagination from '../components/UI/Pagination';

function Blog() {
  return (
    <div className='py-8 sm:py-12 min-h-[calc(100vh-108px)]'>
      <BlogList />
      <Pagination />
    </div>
  );
}

export default Blog;
