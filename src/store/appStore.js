import { configureStore } from '@reduxjs/toolkit'

import cartReducer from './cartSlice'
import filterReducer from "./filterSlice"; 

 const appStore = configureStore({
  reducer: {
    cart : cartReducer,
    filter: filterReducer,
  },
})


export default appStore;