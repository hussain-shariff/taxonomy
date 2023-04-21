import { Github } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className='border-b flex flex-col gap-5 pb-10'>
        <div>
            <img src="/assets/hero.png" alt="hero" className=' h-56' />
        </div>
        <h1 className='md:text-6xl text-3xl font-bold tracking-tighter'>What's going on here?</h1>
        <p className='md:text-lg md:w-[73%] text-gray-600 tracking-tight'>I'm building a web app with Next.js 13 and open sourcing everything. 
        Follow along as we figure this out together.</p>
        <div className='flex gap-3'>
            <button className='bg-black text-white text-sm rounded-md font-semibold px-6 py-2 hover:bg-slate-700'>Get started</button>
            <a href='https://github.com/hussain-shariff/taxonomy' className='border cursor-pointer px-5 py-2 rounded-md font-semibold text-sm flex items-center gap-1 hover:border-black'>
                <Github/>Github
            </a>
        </div>
    </div>
  )
}

export default HeroSection