import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { basketClear } from '../store/ItemsReducer'

export const Basket = () => {

  const basketItem=useSelector((state)=>state.items.products)

  const dispatcClear=useDispatch()

  console.log(basketItem)

  return (
    
    <div className="relative overflow-x-auto my-10 w-[50%] m-auto">

      {/* clear all items */}
      <div className='p-3'>
        <button onClick={()=>dispatcClear(basketClear())} className='bg-gray-300 p-1 rounded-md w-[100px] hover:bg-gray-400 hover:text-white'>Clear All</button>
      </div>

      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 rounded-l-lg">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Qty
            </th>
            <th scope="col" className="px-6 py-3 rounded-r-lg">
              Price
            </th>
          </tr>
        </thead>

        {
          basketItem.map((item)=>(

            <tbody>
              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.itemName}
                </th>
                <td className="px-6 py-4">{item.itemQuantity}</td>
                <td className="px-6 py-4">${item.itemPrice}</td>
              </tr>
            </tbody>

          ))
        }
        
        <tfoot>
          <tr className="font-semibold text-gray-900 dark:text-white">
            <th scope="row" className="px-6 py-3 text-base">
              Total
            </th>
            <td className="px-6 py-3">3</td>
            <td className="px-6 py-3">21,000</td>
          </tr>
        </tfoot>

      </table>
    </div>


  )
}
