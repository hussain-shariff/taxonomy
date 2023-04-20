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
            <BlogCard
                image='blog-post-1.jpg'
                name='Preview Mode for Headless CMS'
                desc='How to implement preview mode in your headless CMS.'
                date='April 9, 2023'/>
            <BlogCard
                image='blog-post-2.jpg'
                name='Dynamic Routing and Static Regeneration'
                desc='How to use incremental static regeneration using dynamic routes.'
                date='March 4, 2023'/>
            <BlogCard
                image='blog-post-3.jpg'
                name='Server and Client Components'
                desc='React Server Components allow developers to build applications that span the server and client.'
                date='January 8, 2023'/>
            <BlogCard
                image='blog-post-4.jpg'
                name='Deploying Next.js Apps'
                desc='How to deploy your Next.js apps on Vercel.'
                date='January 2, 2023'/>
        </div>
    </div>
  )
}

export default Blog