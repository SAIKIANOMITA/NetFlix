import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInForm,setIsSignInForm]=useState(true)
  const toggleSignInForm = ()=>{
    setIsSignInForm(!isSignInForm)
  }
  return (
    <div >  
      <Header/>
      <div className='absolute'>
      <img src='https://assets.nflxext.com/ffe/siteui/vlv3/729ce5c2-d831-436a-8c9d-f38fea0b99b3/web/IN-en-20241209-TRIFECTA-perspective_4aef76eb-7d5b-4be0-93c0-5f67320fd878_large.jpg'
      alt='logo'/>
      </div>
      <form className='absolute left-0 right-0 w-3/12 p-12 mx-auto text-white bg-black rounded-lg my-36 bg-opacity-80'>
        <h1 className='py-4 pr-4 text-2xl font-bold'>{isSignInForm? "Sign In" : "Nomita Sign up now"}</h1>
        {!isSignInForm && <input type='text' placeholder='Full Name' className='w-full p-2 my-2 bg-gray-700'/>}
        <input type='text' placeholder='Enter Email Address' className='w-full p-2 my-2 bg-gray-700'/>
        <input type='password' placeholder='Enter the password' className='w-full p-2 my-2 bg-gray-700'/>
        <button className='w-24 h-10 p-3 pb-5 my-3 font-bold bg-red-700'>{isSignInForm ? "Sign In":"Sign Up"}</button>
        <p className='text-sm cursor-pointer' onClick={toggleSignInForm}>{isSignInForm?"Hey Nomita New to Netflix?Sign-up now Cutie Pie!":"Already registered ? Sign In now "}</p>
      </form>
     
    </div>
  )
}

export default Login