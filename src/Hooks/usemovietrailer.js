import { useDispatch } from "react-redux"
import movie_option from "../../utils/movie_option"
import { addtrailer } from "../../utils/movieslice"
import { useEffect } from "react"

const usemovietrailer = (id) =>{
        const dispatch = useDispatch()
    const moviesvideo = async () =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/'+id+'/videos?language=en-US',movie_option)
        const json = await data.json()
        // console.log(json);
        const filterdata = json.results.filter((data)=> data.type === "Trailer")
        const result = filterdata.length ? filterdata[0] : json.result[0]
        console.log(result);  
        dispatch(addtrailer(result))
        
    }
    // console.log(id); 
    useEffect(()=>{
        moviesvideo()
    },[])
}

export default usemovietrailer;