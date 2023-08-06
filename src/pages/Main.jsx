import React, { useContext,useState,useEffect } from 'react'
import { Items } from '../components/Items';
import axios from 'axios';

export const Main = () => {

  const [categories, setcategories] = useState([])
  const [secilendata, setsecilendata] = useState("")

  const API_CATEGORIES=`https://dummyjson.com/products/categories`

  const getCategories=(API)=>{

    axios(API)
    .then((res)=>{

      setcategories(res.data)
    })
    .catch((err)=>console.log(err))
  }

  useEffect(() => {

    getCategories(API_CATEGORIES)

  }, [])




  return (
    
    <>
    
    <div className=' m-auto text-center items-center gap-3 p-5'>

    <h3 className='p-3 text-red-600 text-xl tracking-[0.7rem]'>Categories</h3>

        <select name="" id="" onChange={(e)=>setsecilendata(e.target.value)} className='p-2 w-[300px] border-2 border-inherit rounded-full'>
        {

          
          categories.map((items)=>(
            
            
            <option value={items}>{items}</option>
           
            
          ))
             
        }      
    
    </select>

    </div>

   <Items secilendata={secilendata}/>

  </>

  )
}
