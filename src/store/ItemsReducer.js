
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

export const itemsReducer = (state = initialState, {type,payload}) => {
  switch (type) {

  case INC:
    return {count:state.count + 1}
  
  case CLEAR:
    return {products:[],count:0}
  
  case NEW_ITEM:

    return{count:state.count + 1,products:[...state.products,{id:payload.id,itemName:payload.title,itemQuantity:1,itemPrice:payload.price}]}  
    
  default:
    return state
  }
}



