import Movielist from './Movielist'
import { useSelector } from 'react-redux'

const Secondarycontainer = () => {
  const movies = useSelector((store) => store.movie)

  return   movies?.newplayingmovie && (
    <div className='bg-black'>
      <div className='-mt-64 relative z-10'>
      <Movielist title={"Now playing"} movie={movies?.newplayingmovie}/>
      <Movielist title={"Now playing"} movie={movies?.newplayingmovie}/>
      <Movielist title={"Now playing"} movie={movies?.newplayingmovie}/>
      </div>
    </div>
  )
}

export default Secondarycontainer