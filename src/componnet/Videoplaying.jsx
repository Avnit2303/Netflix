import { useSelector } from 'react-redux'
import usemovietrailer from '../Hooks/usemovietrailer'

const Videoplaying = ({id}) => {
    const data = useSelector((store)=>store.movie?.newtrailer)
    usemovietrailer(id)
  return (
    <>
    <div className='w-full'>
        <iframe className='w-full aspect-video ' 
        src={"https://www.youtube.com/embed/" + data?.key +"?autoplay=1&loop=1&mute=1&playlist="+data?.key} 
        title="YouTube video player" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
    </div>
    </>
  )
}

export default Videoplaying