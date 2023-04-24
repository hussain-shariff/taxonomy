import { FileText, CreditCard, Settings, Plus, MoreVertical, Divide } from 'lucide-react';
import PostCard from '../components/PostCard';
import useAppContext from '../context';

const DashBoard = () => {
    const {dispatch, state} = useAppContext()
    const {dashboardPage} = state

    const handleSwitch = (page : string)  =>{
        dispatch({
            type : 'SWITCH_PAGE',
            payload : {page}
        })
    }

  return (
    <div className='min-h-[82vh] md:grid md:grid-cols-5'>
        <section className='border-r p-5 hidden gap-1 md:flex md:flex-col col-span-1'>
            <p onClick={()=>handleSwitch('posts')} className=' flex items-center border-b justify-start cursor-pointer gap-1 p-2 text-sm hover:bg-slate-200 rounded'>
                <FileText className=' h-4'/>
                Posts
            </p>
            <p onClick={()=>handleSwitch('billing')} className=' flex items-center border-b justify-start cursor-pointer gap-1 p-2 text-sm  hover:bg-slate-200 rounded'>
                <CreditCard className=' h-4'/> 
                Billing
            </p>
            <p onClick={()=>handleSwitch('settings')} className=' flex items-center border-b justify-start cursor-pointer gap-1 p-2 text-sm  hover:bg-slate-200 rounded'>
                <Settings className=' h-4'/>
                Settings
            </p>
        </section>
        <section className=' bg-gray-100 col-span-4 p-5'>
            {dashboardPage === 'posts' &&
            <>
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
            </>
            }
            {dashboardPage === 'settings' && 
            <>
                <div className='flex flex-col'>
                    <div>
                        <h1 className='font-bold text-2xl'>Settings</h1>
                        <p className=' text-gray-500 mt-1'>Manage account and website settings.</p>
                    </div>
                    <div className='border p-5 rounded mt-5 space-y-2'>
                        <h1 className=' font-medium text-lg'>Your Name</h1>
                        <p className='text-sm text-gray-500'>Please enter your full name or a display name you are comfortable with.</p>
                        <input placeholder='Name' className='rounded border py-2 px-5' type="text" />
                        <button className=' text-sm font-medium ml-4 bg-black rounded py-2 px-4 hover:bg-slate-700 text-white'>Save</button>
                    </div>
                </div>
            </>}
            {dashboardPage === 'billing' &&
            <>
                <div className='flex flex-col'>
                    <div>
                        <h1 className='font-bold text-2xl'>Billing</h1>
                        <p className=' text-gray-500 mt-1'>Manage billing and your subscription plan.</p>
                    </div>
                    <div className='border p-5 rounded mt-5 space-y-2'>
                        <h1 className=' font-medium text-lg'>This is a demo app.</h1>
                        <p className='text-sm text-gray-500'>Taxonomy app is a demo app using a Stripe test environment. You can find a list of test card numbers on the <a href="https://stripe.com/docs/testing#cards" className=' underline'>Stripe docs.</a>
                        </p>
                    </div>
                    <div className='border p-5 rounded mt-5 space-y-2'>
                        <h1 className=' font-medium text-lg'>Subscription Plan.</h1>
                        <p className='text-sm text-gray-500'>You are currently on the Free plan.</p>
                        <p className=' text-sm'>The free plan is limited to 3 posts. Upgrade to the PRO plan for unlimited posts.</p>
                        <button className=' text-sm font-medium bg-black rounded py-2 px-4 hover:bg-slate-700 text-white'>Upgrade to pro</button>
                    </div>
                </div>
            </>
            }
        </section>
    </div>
  )
}

export default DashBoard