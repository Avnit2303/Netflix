import { createSlice } from "@reduxjs/toolkit";

const movieslice = createSlice({
    name:"movie",
    initialState:{
        newplayingmovie : null,
        newtrailer:null
    },
    reducers:{
        addmovie:(state,action)=>{
            state.newplayingmovie = action.payload
        },
        addtrailer:(state,action)=>{
            state.newtrailer = action.payload
        }
    }
});

export const {addmovie,addtrailer} = movieslice.actions;
 export default movieslice.reducer