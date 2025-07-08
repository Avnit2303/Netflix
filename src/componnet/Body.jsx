import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider, useParams } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'
import Movietrailer from './Movietrailer'


const Body = () => {
  // console.log(tid);
  

  const approuter = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/browse",
      element: <Browse />
    },
        {
      path: "/trailer/:id",
      element: <Movietrailer />
    }
  ])

 


  return (
    <>
      <RouterProvider router={approuter} />
    </>
  )
}

export default Body