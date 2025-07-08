import React from 'react'
import { poster_url } from '../../utils/constant'

const Moviecard = ({poster}) => {
  // console.log(poster);
  
  return (
    <div className='w-48'>
      <img src={poster_url + poster} alt='poster'/>
    </div>
  )
}

export default Moviecard