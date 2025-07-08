import React from 'react'
import { useParams } from 'react-router-dom'
import useallmovietrailer from '../Hooks/useallmovietrailer';

const Trailer = () => {
    const {id} = useParams()
  console.log(id);
 const results =  useallmovietrailer(id)
//  console.log(results);
  return (
    <>
    <div className='w-full'>
        <iframe className='w-full aspect-video ' 
        src={"https://www.youtube.com/embed/" + results?.key +"?autoplay=1&loop=1&mute=1&playlist="+results?.key} 
        title="YouTube video player" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
    </div>
    </>
)
}

export default Trailer