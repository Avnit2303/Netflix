import React, { useEffect } from 'react'
import Header from './Header'
import useplaymovie from '../Hooks/useplaymovie'
import Maincontainer from './Maincontainer'
import Secondarycontainer from './Secondarycontainer'

const Browse = () => {
  useplaymovie()
  return (
    <>
    <Header/>
    <Maincontainer/>
    <Secondarycontainer/>
    </>
  )
}

export default Browse