import { useDispatch } from "react-redux"
import movie_option from "../../utils/movie_option"
import { upcomingmovie } from "../../utils/movieslice"
import { useEffect } from "react"

const useupcomingmovie = () =>{
    const dispatch = useDispatch()
    const upcomingmovies = async () =>{
        const movies = await fetch("https://api.themoviedb.org/3/movie/upcoming?page=1",movie_option)
        const moviedata = await movies.json()
        dispatch(upcomingmovie(moviedata?.results))
    }
    useEffect(()=>{
        upcomingmovies()
    },[])
}
export default useupcomingmovie;