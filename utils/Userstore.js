import { configureStore } from "@reduxjs/toolkit";
import  UserReducer from "./Userslice"
import movieReducer from "./movieslice"

const Userstore = configureStore({
    reducer:{
        user:UserReducer,
        movie:movieReducer
    }
})

export default Userstore;