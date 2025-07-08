import { useDispatch } from "react-redux"
import movie_option from "../../utils/movie_option"
import { addmovie } from "../../utils/movieslice"
import { useEffect } from "react"


const useplaymovie = () =>{
     const dispatch = useDispatch()
  const movies = async () =>{
    const movielist = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1",movie_option)
    const moviedata = await movielist.json()
    // console.log(moviedata.results);  
    dispatch(addmovie(moviedata?.results))
  }
  useEffect(()=>{
    movies()
  },[])
}

export default useplaymovie;