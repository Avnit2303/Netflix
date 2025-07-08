import Movielist from './Movielist'
import { useSelector } from 'react-redux'

const Secondarycontainer = () => {
  const movies = useSelector((store) => store.movie)

  return   movies?.newplayingmovie && (
    <div className='bg-black'>
      <div className='-mt-64 relative z-10'>
      <Movielist title={"Now playing"} movie={movies?.newplayingmovie}/>
      <Movielist title={"Popular"} movie={movies?.newpopularmovie}/>
      <Movielist title={"Top Rated"} movie={movies?.newtoprateddmovie}/>
      <Movielist title={"Upcoming"} movie={movies?.newupcomingmovie}/>
      </div>
    </div>
  )
}

export default Secondarycontainer