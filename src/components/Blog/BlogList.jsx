import React from 'react';
import BlogItem from './BlogItem';

function BlogList() {
  return (
    <div className='grid gap-8 xl:gap-12 grid-cols-1 sm:grid-cols-[repeat(auto-fit,_minmax(240px,_1fr))]'>
      <BlogItem />
      <BlogItem />
      <BlogItem />
      <BlogItem />
      <BlogItem />
      <BlogItem />
      <BlogItem />
      <BlogItem />
      <BlogItem />
      <BlogItem />
    </div>
  );
}

export default BlogList;
