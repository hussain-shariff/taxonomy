import { MoreVertical } from 'lucide-react';

const PostCard = () => {
  return (
    <div className=' border flex items-center justify-between p-3 rounded'>
        <div>
            <h1 className=' font-medium cursor-pointer hover:underline'>test</h1>
            <p className=' text-gray-500 text-sm'>April 23, 2023</p>
        </div>
        <MoreVertical className=' text-gray-500 h-4 cursor-pointer'/>
    </div>
  )
}

export default PostCard