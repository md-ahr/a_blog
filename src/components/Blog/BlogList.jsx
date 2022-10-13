import React from 'react';
import BlogItem from './BlogItem';

function BlogList() {
  return (
    <div className='grid gap-6 grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))]'>
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
