import { configureStore } from "@reduxjs/toolkit";
import  useReducer from "./Userslice"

const Userstore = configureStore({
    reducer:{
        user:useReducer
    }
})

export default Userstore;