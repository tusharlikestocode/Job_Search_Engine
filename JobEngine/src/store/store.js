import { configureStore } from '@reduxjs/toolkit'
import filterReducer from './DropdownSlice'

export const store = configureStore({
  reducer: {
    filter: filterReducer,
  },
})