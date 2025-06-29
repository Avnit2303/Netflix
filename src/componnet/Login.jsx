import React, { useRef, useState } from 'react'
import Header from './Header'
import Checkvalidation from './Checkvalidation'
import { auth } from '../../utils/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { adduser } from '../../utils/Userslice';
import { img_url } from '../../utils/constant';

const Login = () => {
    const [signin, setsignin] = useState(true)
    const [error, seterror] = useState(null)
     const dispatch = useDispatch()
    const handlesignin = () => {
        setsignin(!signin)
    }

    const email = useRef(null)
    const password = useRef(null)
    const name = useRef(null)
    // console.log(name)
    const handlesubmit = () => {
        const mess = Checkvalidation(email.current.value, password.current.value)
        seterror(mess)

        if (mess) return;

        if (!signin) {
            //sign up logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(auth.currentUser, {
                        displayName: name.current.value
                    }).then(() => {
                        const { uid, email, displayName } = auth.currentUser;
                        dispatch(adduser({ uid: uid, email: email, displayName: displayName }));
                    }).catch((error) => {
                        console.log(error)
                    });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    seterror(errorCode + "" + errorMessage)
                });
        }
        else {
            //sign in logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    seterror(errorCode + "" + errorMessage)
                });

        }

    }


    return (
        <>
            <Header />
            <div className='absolute  '>
                <img src={img_url} alt="logo" className=' object-cover' />
                <div className='absolute inset-0 bg-black opacity-50 '></div>
            </div>
            <form className='absolute  w-3/12  px-12 my-28 mx-auto left-0 right-0  bg-black opacity-80  text-white ' onSubmit={(e) => e.preventDefault()}>
                <h1 className='text-3xl font-bold p-4'>{signin ? "Sign In" : "Sign Up"}</h1>
                {!signin && <input type="text" ref={name} placeholder='your Name' className='p-3 m-3 w-full bg-gray-600' />}
                <input ref={email} type="text" placeholder='Email Address' className='p-3 m-3 w-full bg-gray-600' />
                <input ref={password} type="password" placeholder='password' className='p-3 m-3 w-full bg-gray-600' />
                {error && <p className='p-3 m-3 w-full  text-red-500'>{error}</p>}
                <button className='p-3 m-3 bg-red-500 w-full rounded-lg cursor-pointer' onClick={handlesubmit}>{signin ? "Sign In" : "Sign Up"}</button>
                <p className='p-3 m-3 cursor-pointer' onClick={handlesignin}>{signin ? "New to Netflix?Sign up Now" : "Already resister ? Sign in now"}</p>
            </form>
        </>
    )
}

export default Login