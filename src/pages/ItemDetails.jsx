import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation,useParams } from 'react-router-dom'

export const ItemDetails = () => {

  const {state} = useLocation()
  const {id} = useParams()

  const products=useSelector((state)=>state.items.products)

  console.log(products)

  return (
    <div>

    <h1>gelen değer : {id}</h1>
    

    </div>
  )
}
