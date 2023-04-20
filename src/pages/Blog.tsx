import React from 'react'
import BlogCard from '../components/BlogCard'

const Blog = () => {
  return (
    <div className='py-10 px-5 md:px-64'>
        <div className='border-b flex flex-col gap-3 pb-8'>
            <h1 className='md:text-5xl text-3xl font-bold tracking-tighter'>Blog</h1>
            <p className='md:text-lg md:w-[73%] text-gray-600 tracking-tight'>A blog built using Contentlayer. Posts are written in MDX.</p>
        </div>
        <div className='grid md:grid-cols-2 gap-8 py-10'>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
        </div>
    </div>
  )
}

export default Blog