import React from 'react'
import { useSelector } from 'react-redux'
import Videotitle from './Videotitle';
import Videoplaying from './Videoplaying';

function Maincontainer() {
  const movie = useSelector((store) => store.movie?.newplayingmovie)
  if(!movie) return;
  const moviedata = movie[1]
  // console.log(moviedata);
  
  const {original_title,overview,id} = moviedata
  
  return (
    <>
      <Videotitle title={original_title} overview = {overview}/>
      <Videoplaying id={id}/>
      </>
  )
}

export default Maincontainer