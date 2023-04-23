import { FileText, CreditCard, Settings } from 'lucide-react';

const DashBoard = () => {
  return (
    <div className=' min-h-screen relative'>
        <section className='absolute top-0 left-0 w-60 h-full border-r p-8 hidden gap-1 md:flex md:flex-col'>
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
    </div>
  )
}

export default DashBoard