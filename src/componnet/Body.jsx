import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../../utils/firebase';
import { useDispatch } from 'react-redux';
import { adduser, removeuser } from '../../utils/Userslice';

const Body = () => {
 const dispatch =  useDispatch()

  const approuter = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/browse",
      element: <Browse />
    }
  ])

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName} = user;
        dispatch(adduser({uid:uid,email:email,displayName:displayName}))
      } else {
        // User is signed out
        dispatch(removeuser())
      }
    });
  }, [])


  return (
    <>
      <RouterProvider router={approuter} />
    </>
  )
}

export default Body