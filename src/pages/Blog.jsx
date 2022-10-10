import React from 'react';
import BlogList from '../components/Blog/BlogList';

function Blog() {
  return (
    <div className='py-8 min-h-[calc(100vh-108px)]'>
      <p className='mb-8 text-2xl lg:text-3xl font-medium'>All Blog Posts</p>
      <BlogList />
    </div>
  );
}

export default Blog;
