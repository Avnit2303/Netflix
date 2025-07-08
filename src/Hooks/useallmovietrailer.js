import { useEffect, useState } from "react";
import movie_option from "../../utils/movie_option";

const useallmovietrailer = (tid) => {
    const [trailer,settrailer] = useState()
    const allmovietrailer = async () => {
        const trailer = await fetch("https://api.themoviedb.org/3/movie/"+tid+"/videos?language=en-US", movie_option)
        const trailerjson = await trailer.json()
        const filterdata = trailerjson.results.filter((data) => data.type === "Trailer")
        const result = filterdata.length ? filterdata[0] : json.result[0]
        settrailer(result)
    }
    useEffect(() => {
        allmovietrailer()
    }, [])
    return trailer
}
export default useallmovietrailer;