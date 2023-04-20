type FeatureCardProps = {
  name : string,
  description : string
  icon : string
}

const FeatureCard = ({name, description, icon} : FeatureCardProps) => {
  return (
    <div className='border rounded-md p-2 shadow-xl'>
      <div className='bg-black text-sm text-white flex flex-col gap-3 p-4 rounded-md'>
        <img src={`/assets/icons/${icon}`} alt="icon" className='h-12 w-12 text-white' />
        <h1 className='font-bold'>{name}</h1>
        <p>{description}</p>
      </div>
    </div>
    
  )
}

export default FeatureCard