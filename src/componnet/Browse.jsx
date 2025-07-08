import React, { useEffect } from 'react'
import Header from './Header'
import useplaymovie from '../Hooks/useplaymovie'
import Maincontainer from './Maincontainer'
import Secondarycontainer from './Secondarycontainer'
import usepopularmovie from '../Hooks/usepopularmovie'
import usetopratedmovie from '../Hooks/usetopratedmovie'
import useupcomingmovie from '../Hooks/useupcomingmovie'

const Browse = () => {
  useplaymovie()
  usepopularmovie()
  usetopratedmovie()
  useupcomingmovie()
  return (
    <>
    <Header/>
    <Maincontainer/>
    <Secondarycontainer/>
    </>
  )
}

export default Browse