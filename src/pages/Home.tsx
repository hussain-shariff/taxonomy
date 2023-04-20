import React from 'react'
import { Github } from 'lucide-react';

const Home = () => {
  return (
    <div className='border-b py-10 md:py-20 flex flex-col gap-5 px-5 md:px-52'>
        <div>
            <img src="/assets/hero.png" alt="hero" className=' h-56' />
        </div>
        <h1 className='md:text-6xl text-3xl font-bold tracking-tighter'>What's going on here?</h1>
        <p className='md:text-xl text-gray-600 tracking-tight'>I'm building a web app with Next.js 13 and open sourcing everything. 
        Follow along as we figure this out together.</p>
        <div className='flex gap-3'>
            <button className='bg-black text-white text-sm rounded-md font-semibold px-6 py-2 hover:bg-slate-700'>Get started</button>
            <button className='border px-5 py-2 rounded-md font-semibold text-sm flex items-center gap-1'>
                <Github/>Github
            </button>
        </div>
    </div>
  )
}

export default Home