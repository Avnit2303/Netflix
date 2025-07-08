import { useEffect, useState } from "react";
import movie_option from "../../utils/movie_option";

const usemovieoverview = (id) => {
    const [overview, setoverview] = useState()
    const movieoverview = async () => {
        const movieoverview = await fetch("https://api.themoviedb.org/3/movie/"+id+"?language=en-US", movie_option)
        const moviedata = await movieoverview.json()
        setoverview(moviedata)
        // console.log(overview);

    }
    useEffect(() => {
        movieoverview()
    }, [])
    return overview;
}

export default usemovieoverview;