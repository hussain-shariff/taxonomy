import { FileText, CreditCard, Settings, Plus, MoreVertical } from 'lucide-react';
import PostCard from '../components/PostCard';

const DashBoard = () => {
  return (
    <div className='min-h-screen md:grid md:grid-cols-5'>
        <section className='border-r p-5 hidden gap-1 md:flex md:flex-col col-span-1'>
            <p className=' flex items-center border-b justify-start cursor-pointer gap-1 p-2 text-sm hover:bg-slate-200 rounded'>
                <FileText className=' h-4'/>
                Posts
            </p>
            <p className=' flex items-center border-b justify-start cursor-pointer gap-1 p-2 text-sm  hover:bg-slate-200 rounded'>
                <CreditCard className=' h-4'/> 
                Billing
            </p>
            <p className=' flex items-center border-b justify-start cursor-pointer gap-1 p-2 text-sm  hover:bg-slate-200 rounded'>
                <Settings className=' h-4'/>
                Settings
            </p>
        </section>
        <section className=' bg-gray-100 col-span-4 p-5'>
            <div className=' flex items-center justify-between mb-5'>
                <div>
                    <h1 className='font-bold text-2xl'>Posts</h1>
                    <p className=' text-gray-500 mt-1'>Create and manage posts.</p>
                </div>
                <button className=' px-4 py-2 bg-black text-white flex items-center text-sm font-medium rounded
                hover:bg-slate-700'>
                    <Plus className=' h-4'/> New post
                </button>
            </div>
            <PostCard/>
            <PostCard/>
            <PostCard/>
        </section>
    </div>
  )
}

export default DashBoard