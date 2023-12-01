import React, { useState } from 'react'
import Header from './Header'

const LogIn = () => {

  const [isSignInForm, setIsSignUpForm] = useState(true);

  const toggleSignInForm = () =>{
    setIsSignUpForm(!isSignInForm);
  };
  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/728874a6-eeda-400a-9bcf-a935a1408a4f/IN-en-20231127-popsignuptwoweeks-perspective_alpha_website_small.jpg' 
        alt='bg'
        />
      </div>
      <div className='flex items-center justify-center h-screen text-white'>
        <form className='absolute w-3/12 bg-black bg-opacity-80 p-8 rounded-lg '>
          <h1 className='font-bold text-4xl my-8 '>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
          { !isSignInForm && (
            <input type='text' placeholder='Full Name' className='my-2 p-6 py-8 w-full h-14 rounded-md text-xl bg-zinc-800'/>
          )}
          { !isSignInForm && (
            <input type='text' placeholder='Phone Number' className='my-2 p-6 py-8 w-full h-14 rounded-md text-xl bg-zinc-800'/>
          )}
          <input 
            type='text' placeholder={isSignInForm ? 'Email or phone number' : 'Email'} className='my-2 p-6 py-8 w-full h-14 rounded-md text-xl bg-zinc-800'
          />
          <input 
            type='text' placeholder='Password' className='my-3 p-6 py-8 w-full h-14 rounded-md text-xl bg-zinc-800'
          />
          <button 
            className=' py-3 bg-red-700 w-full my-8 h-16 rounded-md font-bold text-xl '>
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className='py-4 text-xl cursor-pointer'>
            {isSignInForm
              ? (
                <>
                  New to Netflix? <span className='text-blue-500 underline' onClick={toggleSignInForm}>Sign up now.</span>
                </>
              )
              : (
                <>
                  Already Registered? <span className='text-blue-500 underline ' onClick={toggleSignInForm}>Sign in now.</span>
                </>
              )
            }
          </p>

        </form>
      </div>


    </div>
  )
}

export default LogIn