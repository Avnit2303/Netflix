import { useDispatch } from "react-redux"
import movie_option from "../../utils/movie_option"
import { popularmovie } from "../../utils/movieslice"
import { useEffect } from "react"


const usepopularmovie = () =>{
     const dispatch = useDispatch()
  const popularmovies = async () =>{
    const movielist = await fetch("https://api.themoviedb.org/3/movie/popular?page=1",movie_option)
    const moviedata = await movielist.json()
    // console.log(moviedata);  
    dispatch(popularmovie(moviedata?.results))
  }
  useEffect(()=>{
    popularmovies()
  },[])
}

export default usepopularmovie;