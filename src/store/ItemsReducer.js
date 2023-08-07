
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
//{id:0,itemName:"",itemPrice:0,priceSymbol:"$",itemQuantity:0,totalPrice:0,itemImage:""}

export const itemsReducer = (state = initialState, {type,payload}) => {
  switch (type) {

  case INC:
    return {count:state.count + 1}
  
  case CLEAR:
    return {products:[],count:0}
  
  case NEW_ITEM:
    return{count:state.count + 1,products:[...state.products,{id:new Date().getTime(),itemName:payload.title,itemQuantity:0,itemPrice:payload.price}]}

  default:
    return state
  }
}



