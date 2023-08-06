export const INC = 'INC'


export const addToBasket=()=>({type:INC})

const initialState = {
    count:0,
}



export const itemsReducer = (state = initialState, action) => {
  switch (action.type) {

  case INC:
    return {count:state.count + 1}

  default:
    return state
  }
}
