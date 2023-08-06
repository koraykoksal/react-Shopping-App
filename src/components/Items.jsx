import React, { useContext,useEffect,useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router';
import axios from 'axios';
import {MdAttachMoney} from 'react-icons/md'
import {AiFillEye} from 'react-icons/ai'
import {BiCartDownload} from 'react-icons/bi'


export const Items = ({secilendata}) => {

  const [products, setProducts] = useState([])

  const API_SELECT_PRODUCTS=`https://dummyjson.com/products/category/${secilendata}`
  const API_ALL_PRODUCTS=`https://dummyjson.com/products`



  useEffect(() => {
    get_all_products(API_ALL_PRODUCTS)
  }, [])

  useEffect(() => {
    get_select_Products(API_SELECT_PRODUCTS)
  }, [secilendata])
  
  
  //kategori seçildiğinde gelen veriler
  const get_select_Products=(API)=>{
    axios(API)
    .then((res)=>setProducts(res.data.products))
    .catch((err)=>console.log(err))
  }
  
  //sayfa ilk render olduğunda gelen veriler
  const get_all_products=(API)=>{
    axios(API)
    .then((res)=>setProducts(res.data.products))
    .catch((err)=>console.log(err))
  }



  return (
    
    <div className='flex flex-wrap justify-center items-center gap-3 my-5'>

    {
      
      products.map((item,i)=>{

        return(



        <div
          className="movie hover:rounded-md"
          id="container"
          // onClick={() => navigate("/details/" + item?.id)}
          key={item?.id}

        >
          <div className="movie-over flex flex-wrap justify-center items-center gap-3">
            
            {/* <AiFillEye size={'26px'}/>
            <BiCartDownload size={'26px'}/> */}

            <button className='bg-orange-300 p-3 rounded-lg hover:bg-orange-400'>Add To Basket</button>
            
          </div>

          <img
            loading="lazy"
            src={item?.thumbnail}
            alt="movie-card"
            width={'100%'}
            className='bg-cover'
          />
          <div className="flex items-center justify-evenly p-1 text-white">

            
            <h5 className='text-md'>{item?.title}</h5>

            <div className='flex flex-wrap justify-center items-center rounded-sm gap-1 bg-white p-2 text-black'>
              
              <MdAttachMoney size={'22px'}/>
              {item?.price}
            
            </div>
            
          </div>
          
        </div>

        )
      })

    }

    </div>
  )
}
