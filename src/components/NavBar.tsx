import { Command, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';

const NavBar = () => {


    return (
        <div className='flex px-8 py-3 items-center justify-between border-b sticky top-0 md:px-12'>
            <div className='flex gap-5 md:gap-10 items-center'>
                <Link to={'/'} className='flex items-center gap-1 md:gap-2 mr-1'>
                    <Command color="black" size={22} />
                    <h1 className=' font-bold'>Taxonomy</h1>
                </Link>
                <p className='text-gray-600 font-medium text-sm hover:text-black cursor-pointer'>Features</p>
                <p className='text-gray-600 font-medium text-sm hover:text-black cursor-pointer'>Blog</p>
            </div>
            <div className='flex items-center gap-2'>
                <Moon className='cursor-pointer hover:bg-gray-300 px-2 py-1 rounded-md h-full w-full'/>
                <button className='bg-black text-sm font-medium text-white px-4 py-1 rounded-md hover:bg-slate-700'>Login</button>
            </div>
        </div>
)
};


export default NavBar