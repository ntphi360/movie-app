import  {useState} from 'react'
import {Link,useNavigate } from 'react-router-dom'
import {UserAuth} from '../context/AuthContext'
import bgNet from '../assets/img/bgNet.jpg'


const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {user, signUp} = UserAuth()
  console.log(user)
 
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
        await signUp (email, password)
        navigate('/')
    } catch (error){
       console.log(error);
    }
  }
  
  
  return (
    <div className='w-full h-screen'>
      <img src={bgNet} className='hidden sm:block absolute w-full h-full object-cover' alt='bg-netflix'/>
      <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
      <div className='fixed w-full px-4 py-24 z-50'>
        <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
          <div className='max-w-[320px] mx-auto py-16'>
            <h1 className='text-3xl font-bold'>Sign Up</h1>
            
            <form onSubmit = {handleSubmit} className='w-full flex flex-col py-4'>        
              <div class="relative ">
                <input onChange={(e) => setEmail(e.target.value)}  type="email" id="floating_email" class="block text-sm rounded px-2.5 pb-2.5 pt-5 w-full text-gray-900 bg-[#333] border-0 border-b-2 border-[#333] appearance-none dark:text-white dark:border-[#333] dark:focus:border-[#e87c03] focus:outline-none focus:ring-0 focus:border-[#e87c03] peer" placeholder=" " />
                <label for="floating_email" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-gray-900 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                  Email or number phone
                </label>
              </div>          
             
              <div className='relative my-2'>
                <input onChange={(e) => setPassword(e.target.value)} type="password" id="floating_password" class="block text-sm rounded px-2.5 pb-2.5 pt-5 w-full text-gray-900 bg-[#333] border-0 border-b-2 border-[#333] appearance-none dark:text-white dark:border-[#333] dark:focus:border-[#e87c03] focus:outline-none focus:ring-0 focus:border-[#e87c03] peer" placeholder=" " />
                <label for="floating_password" autoComplete='current-password' class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-gray-900 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                  Password
                </label>
              </div>
             
              <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign Up</button>
              
              <div className='flex justify-between items-center text-sm text-gray-400'>
                <p className='mr-2'><input type="checkbox"/> Remenber me </p>
                <p className='text-white'>Need Help?</p>
              </div>
              
              <p className='py-8'>
                <span className='text-gray-400'>
                  Already have netflix?
                </span>{' '}
                <Link to='/login'>Sign in now</Link>
              </p>
            </form>
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup