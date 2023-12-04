import React, { useEffect } from 'react'
import LogIn from './LogIn'
import Browse from './Browse'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Utils/firebaseConfig';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../Utils/userSlice';


const Body = () => {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LogIn/>,
    },
    {
      path: "/browse",
      element: <Browse/>,
    }
  ]);

  useEffect (() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL} = user;
        dispatch(
          addUser({ 
            uid: uid, 
            email: email, 
            displayName: displayName, 
            photoURL: photoURL})
        );
      } else {
        dispatch(removeUser());
      }
    });
  }, []);

  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  );
};

export default Body