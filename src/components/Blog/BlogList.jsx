import React from 'react';
import BlogItem from './BlogItem';

function BlogList() {
  return (
    <div className='grid gap-6' style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
      <BlogItem />
    </div>
  );
}

export default BlogList;
