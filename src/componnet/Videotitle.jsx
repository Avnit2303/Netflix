import React from 'react'

const Videotitle = ({title,overview}) => {
  return (
    <div className='pt-[15%] px-11 absolute text-white bg-gradient-to-r from-black w-full aspect-video'>
        <h1 className='text-4xl font-bold'>{title}</h1>
         <p className='w-1/4 py-5'>{overview}</p>
         <button className='text-white'>play</button>
         <div>
          </div>
    </div>
  )
}

export default Videotitle