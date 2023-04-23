import { MoreVertical } from 'lucide-react';
import { useState } from 'react';

const PostCard = () => {
    const [showMore, setshowMore] = useState(false)

  return (
    <div className=' border flex items-center justify-between p-3 rounded relative'>
        <div>
            <h1 className=' font-medium cursor-pointer hover:underline'>test</h1>
            <p className=' text-gray-500 text-sm'>April 23, 2023</p>
        </div>
        <MoreVertical onClick={()=> setshowMore(!showMore)} className=' text-gray-500 h-4 cursor-pointer'/>
        {showMore && <div className=' z-20 text-sm font-medium absolute -bottom-10 right-8 w-28 p-2 bg-white shadow-md rounded'>
            <p className='  hover:bg-slate-200 text-gray-600 cursor-pointer px-2'>Edit</p>
            <p className='text-red-500 hover:bg-slate-200 cursor-pointer px-2'>Delete</p>
        </div>}
    </div>
  )
}

export default PostCard