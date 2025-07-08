import { createSlice } from "@reduxjs/toolkit";

const movieslice = createSlice({
    name:"movie",
    initialState:{
        newplayingmovie : null,
        newpopularmovie:null,
        newtoprateddmovie:null,
        newupcomingmovie:null,
        newtrailer:null
    },
    reducers:{
        addmovie:(state,action)=>{
            state.newplayingmovie = action.payload
        },
        popularmovie:(state,action)=>{
            state.newpopularmovie = action.payload
        },
        topratedmovie:(state,action) =>{
            state.newtoprateddmovie = action.payload
        },
        upcomingmovie:(state,action) =>{
            state.newupcomingmovie = action.payload
        },
        addtrailer:(state,action)=>{
            state.newtrailer = action.payload
        }
    }
});

export const {addmovie,addtrailer,popularmovie,topratedmovie,upcomingmovie} = movieslice.actions;
 export default movieslice.reducer