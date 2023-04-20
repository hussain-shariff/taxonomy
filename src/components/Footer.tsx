import { Command } from 'lucide-react';

const Footer = () => {
  return (
    <div className=' text-slate-600 text-sm px-10 py-4 flex flex-col gap-2 text-center items-center justify-between md:flex-row'>
        <div className='flex flex-col md:flex-row items-center gap-2'>
            <Command/>
            <p>
                Built by <a className=' underline' href="https://github.com/hussain-shariff">Hussain</a>. Hosted on <a href="https://vercel.com" className=' underline'>Vercel</a>. Illustrations by <a href="https://popsy.co" className=' underline'>Popsy</a>
            </p>
        </div>
        <p>The source code is available on <a href="https://github.com/hussain-shariff" className=' underline'>GitHub</a>.</p>
    </div>
  )
}

export default Footer