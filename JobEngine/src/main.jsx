/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import theme from '../src/theme/Theme.js';    
import { ThemeProvider } from '@mui/material';
import { store } from '../src/store/store.js'
import { Provider } from 'react-redux'
import './index.css'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
// Provider to access to state in the redux store to all components in the app 
<Provider store={store}>
{/* ThemeProvider for the theme created  */}
<ThemeProvider theme={theme}>
<App />
</ThemeProvider>
</Provider>


  
)
