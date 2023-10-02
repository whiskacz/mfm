import { useEffect, useRef } from 'react';
import '../index.css';
import logoSmall from '../images/logoSmall.png'



export const LoginPage = () => {

const focusPlaceHolder = useRef<HTMLInputElement | null>(null)

useEffect(()=>{
    focusPlaceHolder.current?.focus()
},[])

  return (
    <div className='w-2/5 h-3/5 border-2 border-myColor400 flex flex-col xl:flex-row '>
        <div className='relative flex flex-col h-full w-full justify-center items-center gap-10 xl:w-3/5'>
            <span className='text-4xl font-roboto text-center '>
                Login to Your Account
            </span>
            <div className='flex flex-col w-3/5 items-center gap-3'>
                <input placeholder="email" ref={focusPlaceHolder} type="email" className='p-1 px-2 bg-myColor100 rounded-full w-full font-roboto' />
                <input placeholder='password' type="password" className='p-1 px-2 bg-myColor100 rounded-full w-full font-roboto' />
                <button className='m-2 text-white w-[170px] h-[40px] bg-myColor400 rounded-full font-roboto'>
                    Sign in
                </button>
            </div>
            <div className='absolute top-5 left-5 text-myColor100 hidden xl:block'>
                <a href="https://github.com/whiskacz" className='font-roboto text-m text-myColor400'>#MyFridgeManager</a>
            </div>
            <div className="rounded-full w-[40px] h-[40px] image-content absolute top-5 left-5 xl:hidden">
                <img src={logoSmall} alt="github profile" />
            </div>

        </div>
        <div className='flex flex-col h-full w-full bg-myColor400 justify-center items-center gap-10 xl:w-2/5'>
            <span className='text-white text-5xl font-semibold font-roboto text-center'>
                New here?
            </span>
            <span className='text-white text-xl font-roboto text-center'>
                Sign up and taste my app!
            </span>
            <button className='m-2 text-myColor400 w-[170px] h-[40px] bg-white rounded-full font-roboto'>
                    Sign up
            </button>
        </div>
       
    
    </div>
  )
}
