import React from 'react'
import { useLocation,useParams } from 'react-router-dom'

export const ItemDetails = () => {

  const {state} = useLocation()
  const {id} = useParams()

  return (
    <div>

    <h1>gelen değer : {id}</h1>
    

    </div>
  )
}
