import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { adduser, removeuser } from '../../utils/Userslice';
import { logo_url } from '../../utils/constant';

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((store) => store.user)
  const handlesignout = () => {
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      // An error happened.
    });
  }

   useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName} = user;
        dispatch(adduser({uid:uid,email:email,displayName:displayName}))
        navigate("/browse")
      } else {
        // User is signed out
        dispatch(removeuser())
        navigate("/")
      }
    });
  }, [])

  return (
    <div className='absolute px-20 bg-gradient-to-b from-black z-10 w-full flex justify-between'>
      <img src={logo_url}
        className=" w-44" alt="logo" />
      {user && <button className='text-red-500 text-3xl font-bold cursor-pointer' onClick={handlesignout}>sign out</button>}
    </div>
  )
}

export default Header