import { ChevronLeft } from 'lucide-react';
import {Link} from 'react-router-dom'
import Auth from '../components/Auth';

const Login = () => {
  return (
    <div className='min-h-screen flex justify-center items-center relative'>
        <Link to={'/'}>
            <p className='flex items-center text-sm p-5 absolute top-0 left-8'> <ChevronLeft className='h-5'/> Back</p>
        </Link>
        <Auth
          isRegister={false}/>
    </div>
  )
}

export default Login