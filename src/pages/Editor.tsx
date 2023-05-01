import { Link } from "react-router-dom"
import { ChevronLeft } from 'lucide-react';

const Editor = () => {
  return (
    <div className=' min-h-screen'>
        <div className=" flex items-center justify-between p-10">
            <div className=" flex items-center gap-10">
                <Link to={'/dashboard'}>
                    <button className='flex items-center text-sm'> <ChevronLeft className='h-5'/> Back</button>
                </Link>
                <p className=" text-gray-500 text-sm">Draft</p>
            </div>
            <button className=' text-sm font-medium ml-4 bg-black rounded py-2 px-4 hover:bg-slate-700 text-white'>Save</button>
        </div>
        
    </div>
  )
}

export default Editor