import React, { useContext } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router';

export const Items = () => {


  return (
    
    <div className='flex flex-wrap justify-center items-center gap-3'>

    {
      
      // categories.map((item,i)=>{

      //   return(



      //   <div
      //     className="movie"
      //     id="container"
      //     // onClick={() => navigate("/details/" + item?.id)}
      //   >
      //     <div className="movie-over">
      //       <h2>Name</h2>
      //       {/* <p>{item?.name}</p> */}
      //     </div>

      //     <img
      //       loading="lazy"
      //       // src={item ? item.image_link : defaultImage}
      //       alt="movie-card"
            
      //     />
      //     <div className="flex align-baseline justify-between p-1 text-white">
      //       {/* <h5>{item?.name}</h5> */}
      //     </div>
          
      //   </div>

      //   )
      // })

    }

    </div>
  )
}
