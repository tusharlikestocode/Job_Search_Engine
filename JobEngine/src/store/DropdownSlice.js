import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  location: [],
  jobRole : [],
  techStack: [],
  mode : [],
  minExperience : 'All',
  minBasePay : 'All',
  searchCompany : ''
  
}

export const filterReducer = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    
    locationChange: (state, action) => {
        console.log(action.payload);
        return{
            ...state,
            location: action.payload

    }
    },
    techStackChange: (state, action) => {
        console.log(action.payload);
        return{
            ...state,
            techStack: action.payload

    }
    },
    rolesChange: (state, action) => {
        console.log(action.payload);
        return{
            ...state,
            jobRole: action.payload

    }
    },
    modeChange: (state, action) => {
        console.log(action.payload);
        return{
            ...state,
            mode: action.payload

    }
    },
    minExpChange: (state, action) => {
        console.log(action.payload);
        state.minExperience=action.payload
    },
    minPayChange: (state, action) => {
        console.log(action.payload);
        state.minBasePay=action.payload
    },
    search: (state, action) => {
        console.log(action.payload);
        state.searchCompany=action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { locationChange,rolesChange,techStackChange,modeChange,minExpChange,minPayChange,search } = filterReducer.actions

export default filterReducer.reducer