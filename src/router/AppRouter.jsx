import React from 'react'
import { Route, Routes } from 'react-router'
import { Main } from '../pages/Main'
import Navs from '../components/Navs'
import { Banners } from '../components/Banners'

export const AppRouter = () => {


  return (

    <>
    
    <Navs/>
    {/* <Banners/> */}
    <Routes>
      <Route index to="/" element={<Main/>}/>
    </Routes>
    

    </>
  )
}
