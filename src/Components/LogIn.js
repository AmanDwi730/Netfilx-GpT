import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkSignUpData, checkSignInData } from '../Utils/Validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../Utils/firebaseConfig';
import { addUser } from '../Utils/userSlice';
import { useDispatch } from 'react-redux';
import { BG_URL, userPic } from '../Utils/constants';


const LogIn = () => {

  const [isSignInForm, setIsSignUpForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const phoneNumber = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // Validate the form data
    if (!isSignInForm) {
      const message = checkSignUpData(name.current.value, phoneNumber.current.value, email.current.value, password.current.value)
      setErrorMsg(message); 

      if (message) return;

        // Sign up logic
        createUserWithEmailAndPassword(
          auth, 
          email.current.value, 
          password.current.value
        )
          .then((userCredential) => { 
            const user = userCredential.user;
            updateProfile(user, {
              displayName: name.current.value, photoURL: userPic,
            }).then(() => {
              const { uid, email, displayName, photoURL} = auth.currentUser;
              dispatch(
                addUser({ 
                  uid: uid, 
                  email: email, 
                  displayName: displayName, 
                  photoURL: photoURL})
              );
            }).catch((error) => {
              setErrorMsg(error.message);
            });
            })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMsg(errorCode + " - " + errorMessage); 
          });
    } 
    else {
      const message = checkSignInData(email.current.value, password.current.value)
      setErrorMsg(message);

      if (message) return;
      
        signInWithEmailAndPassword(
          auth, 
          email.current.value, 
          password.current.value
        )
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + " - " + errorMessage);
        });
    }
  }    

  const toggleSignInForm = () =>{
    setIsSignUpForm(!isSignInForm);
  };
  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img src= {BG_URL} 
        alt='bg'
        />
      </div>
      <div className='flex items-center justify-center h-screen text-white'>
        <form 
          onSubmit={(e) => e.preventDefault()}
          className='absolute w-3/12 bg-black bg-opacity-80 p-8 rounded-lg '
        >
          <h1 className='font-bold text-4xl my-8 '>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
          { !isSignInForm && (
            <input ref={name} type='text' placeholder='Full Name' className='my-2 p-6 py-8 w-full h-14 rounded-md text-xl bg-zinc-800'/>
          )}
          { !isSignInForm && (
            <input ref={phoneNumber} type='text' placeholder='Phone Number' className='my-2 p-6 py-8 w-full h-14 rounded-md text-xl bg-zinc-800'/>
          )}
          <input 
            ref={email}
            type='text' placeholder={isSignInForm ? 'Email or phone number' : 'Email'} className='my-2 p-6 py-8 w-full h-14 rounded-md text-xl bg-zinc-800'
          />
          <input 
            ref={password}
            type='password' placeholder='Password' className='my-3 p-6 py-8 w-full h-14 rounded-md text-xl bg-zinc-800'
          />
          <p className=' text-red-600 font-bold py-2 text-lg p-1'>{errorMsg}</p>
          <button 
            className=' py-3 bg-red-700 w-full my-8 h-16 rounded-md font-bold text-xl 'onClick={handleButtonClick}>
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
};
export default LogIn