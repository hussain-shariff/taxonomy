import { Command, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Auth = () => {
  return (
    <form className=' flex flex-col gap-3 text-center items-center'>
            <Command/>
            <h1 className='text-xl font-bold'>Welcome back</h1>
            <p className='text-sm text-gray-600'>Enter your email to sign in to your account</p>
            <input type="text" className='w-full border py-1 px-4 rounded text-sm' name="" placeholder='name@example.com'/>
            <button type='submit' className='bg-black text-white text-sm font-medium w-full py-2 rounded
            hover:bg-slate-700'>Sign In with Email</button>
            <p className='text-sm text-gray-600'>Or continue with</p>
            <button type='button' className='border w-full flex items-center text-sm font-medium justify-center gap-2 py-2 rounded
            hover:border-black'><Github/> Github</button>
            <Link to={'/register'}>
                <p className='underline text-sm text-gray-600 cursor-pointer'>Don't have an account? Sign Up</p>
            </Link>
    </form>
  )
}

export default Auth