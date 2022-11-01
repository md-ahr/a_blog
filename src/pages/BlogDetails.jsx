import React from 'react';
import Comment from '../components/Blog/Details/Comment';
import Description from '../components/Blog/Details/Description';
import LikeDislike from '../components/Blog/Details/LikeDislike';
import MetaInfo from '../components/Blog/Details/MetaInfo';
import RelatedTags from '../components/Blog/Details/RelatedTags';
import Sidebar from '../components/Sidebar/Sidebar';

function BlogDetails() {
  return (
    <div className='py-8 sm:py-12 min-h-[calc(100vh-108px)]'>
      <div className='flex justify-between items-start w-full flex-wrap'>
        <div className='w-[100%] lg:w-[60%]'>
          <img src='https://flowbite.com/docs/images/blog/image-1.jpg' className='w-full' alt='blog' />

          <MetaInfo />

          <Description />

          <LikeDislike />

          <RelatedTags />

          <Comment />
        </div>

        <Sidebar />
      </div>
    </div>
  );
}

export default BlogDetails;
