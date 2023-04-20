type BlogCardProps = {
    image : string,
    name : string,
    desc : string,
    date : string
}

const BlogCard = ({ image, name, desc, date } : BlogCardProps ) => {
  return (
    <div className='cursor-pointer group flex flex-col gap-2'>
        <img src={`/assets/blog/${image}`} alt="blog-img" className='border rounded-md group-hover:border-black' />
        <h1 className=' text-2xl font-bold tracking-tight'>{name}</h1>
        <p className='text-gray-600 text-sm'>{desc}</p>
        <p className='text-gray-600 text-sm'>{date}</p>
    </div>
  )
}

export default BlogCard