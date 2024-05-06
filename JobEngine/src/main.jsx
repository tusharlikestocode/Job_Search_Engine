/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import theme from '../src/theme/Theme.js';    
import { ThemeProvider } from '@mui/material';
import { store } from '../src/store/store.js'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(

<Provider store={store}>
<ThemeProvider theme={theme}>
<App />
</ThemeProvider>
</Provider>


  
)
