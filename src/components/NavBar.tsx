import { Command, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';

const NavBar = () => {


    return (
        <div className='flex px-8 bg-white py-3 items-center justify-between border-b sticky top-0 md:px-12 shadow-md z-30'>
            <div className='flex gap-5 md:gap-10 items-center'>
                <Link to={'/'} className='flex items-center gap-1 md:gap-2 mr-1'>
                    <Command color="black" size={22} />
                    <h1 className=' font-bold'>Taxonomy</h1>
                </Link>
                <a href="#features" className='text-gray-600 font-medium text-sm hover:text-black cursor-pointer'>Features</a>
                <Link to={'/blog'}>
                    <p className='text-gray-600 font-medium text-sm hover:text-black cursor-pointer'>Blog</p>
                </Link>
            </div>
            <div className='flex items-center gap-2'>
                <Moon className='cursor-pointer hover:bg-gray-300 px-2 py-1 rounded-md h-full w-full'/>
                <Link to={'/login'}>
                    <button className='bg-black text-sm font-medium text-white px-4 py-1 rounded-md hover:bg-slate-700'>Login</button>
                </Link>
            </div>
        </div>
)
};


export default NavBar