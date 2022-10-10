import React from 'react';
import {
  // eslint-disable-next-line comma-dangle
  MdCircle, MdDoubleArrow, MdOutlineArrowRightAlt, MdSearch, MdThumbDownOffAlt, MdThumbUpOffAlt
} from 'react-icons/md';

function BlogDetails() {
  return (
    <div className='py-4 md:py-8 lg:py-12 min-h-[calc(100vh-108px)]'>
      <div className='flex justify-between items-start w-full flex-wrap'>
        <div className='w-[100%] lg:w-[60%]'>
          <img src='https://flowbite.com/docs/images/blog/image-1.jpg' className='w-full' alt='blog' />

          {/* Blog Post Meta Info */}
          <div className='flex items-center mt-6'>
            <img src='https://www.pngitem.com/pimgs/m/130-1300253_female-user-icon-png-download-user-image-color.png' className='w-12 rounded-full' alt='author' />
            <div className='ml-4'>
              <p className='text-slate-700 font-medium'>Abdul Halim</p>
              <p className='flex items-center text-sm text-slate-500'>
                Posted on May 10, 2022
                <MdCircle className='mx-2 text-[6px]' />
                6 min read
              </p>
            </div>
          </div>

          {/* Blog Post Description */}
          <div className='my-6'>
            <p className='text-slate-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero maiores impedit assumenda sequi hic labore quaerat voluptatem similique nesciunt nulla non iste, rerum repellendus facilis pariatur? Magni voluptatem modi amet!</p>
            <p className='text-slate-600 mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore commodi reiciendis corrupti odit? Itaque, quos excepturi sit expedita dolores exercitationem, soluta dicta ducimus ea iusto doloribus aliquam quo odit esse! Culpa accusantium provident sed magni facere impedit, totam quod amet fugiat enim dolores quidem voluptate? Cum, modi delectus. Necessitatibus fugiat voluptate, blanditiis exercitationem ipsa voluptas ex harum in quasi iste! Laborum, omnis. Asperiores fuga maxime nihil unde! Cumque delectus ipsum natus amet veniam quo consequatur velit ullam, error mollitia explicabo dolore minus ad beatae dolorum tenetur, commodi sunt officia. Aspernatur. Minima corrupti voluptatem soluta reprehenderit fugiat sapiente quae, in perspiciatis asperiores alias rem voluptates placeat aspernatur eum repellendus cupiditate aperiam totam possimus fuga culpa est similique libero laboriosam!</p>
            <p className='text-slate-600 mt-2'>Asperiores fuga maxime nihil unde! Cumque delectus ipsum natus amet veniam quo consequatur velit ullam, error mollitia explicabo dolore minus ad beatae dolorum tenetur, commodi sunt officia. Aspernatur. Minima corrupti voluptatem soluta reprehenderit fugiat sapiente quae, in perspiciatis asperiores alias rem voluptates placeat aspernatur eum repellendus cupiditate aperiam totam possimus fuga culpa est similique libero laboriosam!</p>
          </div>

          {/* Like & Dislike */}
          <div className='flex items-center mt-8'>
            <p className='flex items-center text-slate-500'>
              <MdThumbUpOffAlt className='text-2xl cursor-pointer' />
              <span className='text-xs ml-1'>(12)</span>
            </p>
            <p className='flex items-center text-slate-500 ml-5'>
              <MdThumbDownOffAlt className='text-2xl cursor-pointer' />
              <span className='text-xs ml-1'>(3)</span>
            </p>
          </div>

          {/* Related Tags */}
          <div className='mt-8'>
            <p className='text-xl font-medium text-slate-700'>Related Tags</p>
            <div className='flex items-center mt-4 gap-4'>
              <a href='/' className='text-sm px-6 py-2 text-slate-600 border border-slate-400 rounded-full hover:text-white hover:bg-blue-500 transition duration-500 ease'>
                tags 1
              </a>
              <a href='/' className='text-sm px-6 py-2 text-slate-600 border border-slate-400 rounded-full hover:text-white hover:bg-blue-500 transition duration-500 ease'>
                tags 2
              </a>
              <a href='/' className='text-sm px-6 py-2 text-slate-600 border border-slate-400 rounded-full hover:text-white hover:bg-blue-500 transition duration-500 ease'>
                tags 3
              </a>
            </div>
          </div>

          {/* Comments */}
          <div className='mt-8'>
            <p className='text-xl text-slate-700 font-medium'>Comments</p>
            <div className='mt-6 mb-10'>
              <div className='flex items-center'>
                <img src='https://www.pngitem.com/pimgs/m/130-1300253_female-user-icon-png-download-user-image-color.png' alt='user' className='w-12 rounded-full' />
                <div className='ml-4'>
                  <p className='text-slate-700'>Easy to use resource full overall a good tool for developers</p>
                  <p className='mt-1 flex items-center text-slate-500 text-sm'>
                    Abdul Halim
                    <MdCircle className='mx-2 text-[6px]' />
                    Oct 10, 2022
                  </p>
                </div>
              </div>
              <div className='reply ml-14 mt-6 flex items-center'>
                <img src='https://www.pngitem.com/pimgs/m/130-1300253_female-user-icon-png-download-user-image-color.png' alt='user' className='w-12 rounded-full' />
                <div className='ml-4'>
                  <p className='text-slate-700'>Easy to use resource full overall a good tool for developers</p>
                  <p className='mt-1 flex items-center text-slate-500 text-sm'>
                    Abdul Halim
                    <MdCircle className='mx-2 text-[6px]' />
                    Oct 10, 2022
                  </p>
                </div>
              </div>
              <div className='mt-6 flex items-center'>
                <img src='https://www.pngitem.com/pimgs/m/130-1300253_female-user-icon-png-download-user-image-color.png' alt='user' className='w-12 rounded-full' />
                <div className='ml-4'>
                  <p className='text-slate-700'>Easy to use resource full overall a good tool for developers</p>
                  <p className='mt-1 flex items-center text-slate-500 text-sm'>
                    Abdul Halim
                    <MdCircle className='mx-2 text-[6px]' />
                    Oct 10, 2022
                  </p>
                </div>
              </div>
            </div>
            <form className='mt-4 py-6 px-8 border border-slate-300 rounded'>
              <div className='flex items-center'>
                <div className='w-[50%]'>
                  <label htmlFor='name' className='block text-slate-600 mb-2'>Name</label>
                  <input type='text' name='name' id='name' className='py-2 px-3 border rounded-sm w-full' />
                </div>
                <div className='w-[50%] ml-6'>
                  <label htmlFor='email' className='block text-slate-600 mb-2'>Email</label>
                  <input type='email' name='email' id='email' className='py-2 px-3 border rounded-sm w-full' />
                </div>
              </div>
              <div className='mt-4'>
                <label htmlFor='message' className='block text-slate-600 mb-2'>Message</label>
                <textarea name='message' id='message' rows='5' className='py-2 px-3 border rounded-sm w-full' />
              </div>
              <div className='mt-5 text-right'>
                <button type='submit' className='py-2 px-6 border border-emerald-500 text-emerald-500 rounded hover:bg-emerald-500 hover:text-white transition duration-500 ease'>Submit</button>
              </div>
            </form>
          </div>
        </div>

        <div className='mt-6 md:mt-8 lg:mt-0 lg:ml-8 p-5 w-[100%] lg:w-[35%] shadow-sm border rounded-sm border-slate-200'>
          <div className='flex items-center border-b border-slate-100 pb-8 py-2'>
            <input type='search' className='p-3 w-full bg-slate-200 rounded-bl rounded-tl' placeholder='Search...' />
            <button type='button' className='text-white bg-emerald-500 px-4 py-[15px] rounded-tr rounded-br text-lg'><MdSearch /></button>
          </div>

          <div className='border-b border-slate-100 py-6'>
            <p className='text-lg font-medium'>Trending Posts</p>
            <ul className='mt-2'>
              <li className='py-1'>
                <a href='/' className='flex items-center text-slate-600 hover:text-blue-500 transition duration-500 ease'>
                  <MdDoubleArrow className='mr-1' />
                  Noteworthy technology acquisitions 2021
                </a>
              </li>
              <li className='py-1'>
                <a href='/' className='flex items-center text-slate-600 hover:text-blue-500 transition duration-500 ease'>
                  <MdDoubleArrow className='mr-1' />
                  Noteworthy technology acquisitions 2021
                </a>
              </li>
              <li className='py-1'>
                <a href='/' className='flex items-center text-slate-600 hover:text-blue-500 transition duration-500 ease'>
                  <MdDoubleArrow className='mr-1' />
                  Noteworthy technology acquisitions 2021
                </a>
              </li>
              <li className='py-1'>
                <a href='/' className='flex items-center text-slate-600 hover:text-blue-500 transition duration-500 ease'>
                  <MdDoubleArrow className='mr-1' />
                  Noteworthy technology acquisitions 2021
                </a>
              </li>
              <li className='py-1'>
                <a href='/' className='flex items-center text-slate-600 hover:text-blue-500 transition duration-500 ease'>
                  <MdDoubleArrow className='mr-1' />
                  Noteworthy technology acquisitions 2021
                </a>
              </li>
            </ul>
          </div>

          <div className='border-b border-slate-100 py-6'>
            <p className='text-lg font-medium'>Popular Categories</p>
            <ul className='mt-2'>
              <li className='py-1'>
                <a href='/' className='flex items-center text-slate-600 hover:text-blue-500 transition duration-500 ease'>
                  <MdOutlineArrowRightAlt className='mr-1' />
                  category one
                </a>
              </li>
              <li className='py-1'>
                <a href='/' className='flex items-center text-slate-600 hover:text-blue-500 transition duration-500 ease'>
                  <MdOutlineArrowRightAlt className='mr-1' />
                  category two
                </a>
              </li>
              <li className='py-1'>
                <a href='/' className='flex items-center text-slate-600 hover:text-blue-500 transition duration-500 ease'>
                  <MdOutlineArrowRightAlt className='mr-1' />
                  category three
                </a>
              </li>
              <li className='py-1'>
                <a href='/' className='flex items-center text-slate-600 hover:text-blue-500 transition duration-500 ease'>
                  <MdOutlineArrowRightAlt className='mr-1' />
                  category four
                </a>
              </li>
            </ul>
          </div>

          <div className='py-6'>
            <p className='text-lg font-medium'>Popular Tags</p>
            <ul className='mt-4 flex items-center flex-wrap gap-4'>
              <a href='/' className='px-6 py-2 text-slate-600 border border-slate-400 rounded-full hover:text-white hover:bg-blue-500 transition duration-500 ease'>
                tags
              </a>
              <a href='/' className='px-6 py-2 text-slate-600 border border-slate-400 rounded-full hover:text-white hover:bg-blue-500 transition duration-500 ease'>
                tags
              </a>
              <a href='/' className='px-6 py-2 text-slate-600 border border-slate-400 rounded-full hover:text-white hover:bg-blue-500 transition duration-500 ease'>
                tags
              </a>
              <a href='/' className='px-6 py-2 text-slate-600 border border-slate-400 rounded-full hover:text-white hover:bg-blue-500 transition duration-500 ease'>
                tags
              </a>
              <a href='/' className='px-6 py-2 text-slate-600 border border-slate-400 rounded-full hover:text-white hover:bg-blue-500 transition duration-500 ease'>
                tags
              </a>
              <a href='/' className='px-6 py-2 text-slate-600 border border-slate-400 rounded-full hover:text-white hover:bg-blue-500 transition duration-500 ease'>
                tags
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;
