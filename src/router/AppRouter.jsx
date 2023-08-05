import React from 'react'
import { Route, Routes } from 'react-router'
import { Main } from '../pages/Main'
import Navs from '../components/Navs'

export const AppRouter = () => {


  return (

    <>
    
    <Navs/>
    <Routes>
      <Route index to="/" element={<Main/>}/>
    </Routes>
    

    </>
  )
}
