import React from 'react'
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import theme from './theme/theme';
import Router from './router/Router';
import axios from 'axios';

const App: React.FC = () => {

  axios.defaults.baseURL = 'http://localhost:8000/'

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App