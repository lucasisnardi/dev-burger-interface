import React from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify'

import Login from './containers/Login'
import Register from './containers/Register'
import GlobalStyles from './styles/globalStyles'

createRoot(document.getElementById('root')).render(
  <>
    <React.StrictMode>
      <Login />
      <ToastContainer autoClose={2000} theme="colored" />
      <GlobalStyles />
    </React.StrictMode>
  </>
)
