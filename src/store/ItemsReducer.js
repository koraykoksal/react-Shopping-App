
import {toastSuccessNotify} from '../helper/ToastNotify'

export const INC = 'INC'
export const CLEAR='CLEAR'
export const NEW_ITEM='NEW_ITEM'

export const addToBasket=()=>({type:INC})
export const basketClear=()=>({type:CLEAR})
export const new_item=(payload)=>({type:NEW_ITEM,payload})

const initialState = {
    count:0,
    products:[]
}

//{id:new Date().getTime(),itemName:"Iphone X",itemPrice:100,priceSymbol:"$",itemQuantity:2,totalPrice:0,itemImage:""}

export const itemsReducer = (state = initialState, {type,payload}) => {
  switch (type) {

  case INC:
    return {count:state.count + 1}
  
  case CLEAR:
    return {products:[...state.products]}
  
  case NEW_ITEM:
    return{products:[...state.products,{id:new Date().getTime(),}]}

  default:
    return state
  }
}



