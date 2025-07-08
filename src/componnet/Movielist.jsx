import React from 'react'
import Moviecard from './Moviecard'
import { Link } from 'react-router-dom';

const Movielist = ({title,movie}) => {
    // console.log(movie);
  return (
    <div className='px-6'>
       <h1 className='text-3xl py-4 text-white'>{title}</h1>
    <div className=' flex overflow-x-scroll  no-scrollbar'>
     
       
        <div className='flex gap-4'>
          {movie?.map(movie=><Link key={movie.id} to={"/trailer/" + movie.id}><Moviecard  poster={movie?.poster_path}/></Link>)}
          
        </div>
    </div>
    </div>
  )
}

export default Movielist