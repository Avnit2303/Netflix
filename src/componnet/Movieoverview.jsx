import React from 'react'
import usemovieoverview from '../Hooks/usemovieoverview'
import { useParams } from 'react-router-dom'

const Movieoverview = () => {
    const{id} = useParams()
    const overviews = usemovieoverview(id)
    console.log(overviews);
    
  return (
    <>  
    <h1 className='text-4xl font-bold'>{overviews?.original_title}</h1>
    <div className='p-5 py-11 '>
    <p>{overviews?.overview}</p>
    </div>
    </>
  

  )
}

export default Movieoverview