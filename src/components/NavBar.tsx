import { Command, Moon, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';
import useAppContext from '../context';
import { useState } from 'react';

const NavBar = () => {
    const [showPopup, setshowPopup] = useState(false)
    const {dispatch, state} = useAppContext()
    const {isDarkMode} = state

    const handleToggle = ()=>{
        dispatch({type : 'TOGGLE_MODE'})
    }
    
    const handleSwitch = (page : string)=>{
        dispatch({type : 'SWITCH_PAGE', payload: { page}})
    }

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
                {!isDarkMode && <Moon onClick={handleToggle} className='cursor-pointer hover:bg-gray-300 px-2 py-1 rounded-md h-full w-full'/>}
                {isDarkMode && <Sun onClick={handleToggle} className='cursor-pointer hover:bg-gray-300 px-2 py-1 rounded-md h-full w-full'/>}
                <Link to={'/login'}>
                    <button className='bg-black text-sm font-medium text-white px-4 py-1 rounded-md hover:bg-slate-700'>Login</button>
                </Link>
                <img onClick={()=> setshowPopup(!showPopup)} src="/shadcn.png" alt="logo" className='h-8 rounded-full cursor-pointer' />
            </div>
            {showPopup &&
            <div className=' absolute top-12 right-10 text-sm bg-white p-3 shadow-lg flex flex-col gap-1 rounded'>
                <div className=' mb-3 border-b'>
                    <h1 className=' font-medium'>Hussain</h1>
                    <p className=' text-gray-500'>hussainowaiz070@gmail.com</p>
                </div>
                <p onClick={()=>handleSwitch('posts')} className='hover:bg-slate-200 px-1 cursor-pointer rounded'>Dashboard</p>
                <p onClick={()=>handleSwitch('billing')} className='hover:bg-slate-200 px-1 cursor-pointer rounded'>Billing</p>
                <p onClick={()=>handleSwitch('settings')} className='hover:bg-slate-200 px-1 cursor-pointer rounded'>Settings</p>
                <p onClick={()=>handleSwitch('posts')} className='hover:bg-slate-200 px-1 cursor-pointer rounded'>Sign out</p>
            </div>}
        </div>
)
};


export default NavBar