import React from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify'

import AppProvider from './hooks'
import Routes from './routes/routes'
import GlobalStyles from './styles/globalStyles'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <Routes />
    </AppProvider>
    <ToastContainer autoClose={2000} theme="colored" />
    <GlobalStyles />
  </React.StrictMode>
)
