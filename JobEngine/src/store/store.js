import { configureStore } from '@reduxjs/toolkit'
import filterReducer from './DropdownSlice'



//creating store to access reducers and state across component regardless the hierarcy 
export const store = configureStore({
  reducer: {
    filter: filterReducer,
  },
})