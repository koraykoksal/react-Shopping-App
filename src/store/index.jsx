import { combineReducers, legacy_createStore as createStore } from "redux"
import { itemsReducer } from "./ItemsReducer"


const rootReducer=combineReducers({
    items:itemsReducer,
})

export const store = createStore(
    rootReducer,
)