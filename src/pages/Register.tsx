import Auth from '../components/Auth'
import { ChevronRight } from 'lucide-react';
import {Link} from 'react-router-dom'

const Register = () => {
  return (
    <div className=' min-h-screen grid grid-cols-2'>
        <div className=' border-r bg-slate-200 flex justify-center items-center'>
            <img src="/shadcn.png" alt="img" className=' h-96' />
        </div>
        <div className='flex justify-center items-center relative'>
            <Link to={'/login'}>
                <p className='absolute top-5 right-5 flex items-center text-sm cursor-pointer'>
                    Login <ChevronRight className='h-5'/>
                </p>
            </Link>
            <Auth
                isRegister={ true }/>
        </div>
    </div>
  )
}

export default Register