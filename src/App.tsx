import React from 'react'
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import theme from './theme/theme';
import Router from './router/Router';
import axios from 'axios';
import { GlobalDataProvider } from './context/CartContext';

const App: React.FC = () => {

  axios.defaults.baseURL = 'https://lms-interview-server.onrender.com/'

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalDataProvider>
          <Router />
        </GlobalDataProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App