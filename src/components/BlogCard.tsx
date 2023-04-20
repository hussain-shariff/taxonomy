import React from 'react'

const BlogCard = () => {
  return (
    <div className='cursor-pointer group flex flex-col gap-3'>
        <img src="/assets/blog/blog-post-1.jpg" alt="blog-img" className='border rounded-md group-hover:border-black' />
        <h1 className=' text-2xl font-bold tracking-tight'>Preview Mode for Headless CMS</h1>
        <p className='text-gray-500'>How to implement preview mode in your headless CMS.</p>
        <p className='text-gray-500'>April 9, 2023</p>
    </div>
  )
}

export default BlogCard