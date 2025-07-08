import { useDispatch } from "react-redux";
import movie_option from "../../utils/movie_option";
import { topratedmovie } from "../../utils/movieslice";
import { useEffect } from "react";

const usetopratedmovie = () =>{
    const dispatch = useDispatch()
    const topratedmovies = async ()=>{
        const movies = await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1",movie_option);
        const moviedata = await movies.json()
        dispatch(topratedmovie(moviedata?.results))

    }
    useEffect(()=>{
        topratedmovies()
    },[])
}
export default usetopratedmovie;