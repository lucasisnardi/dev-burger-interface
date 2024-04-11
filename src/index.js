import React from 'react'
import { createRoot } from 'react-dom'

import Login from './containers/Login'
import Register from './containers/Register'
import GlobalStyles from './styles/globalStyles'

createRoot(document.getElementById('root')).render(
  <>
    <React.StrictMode>
      <Register />
      <GlobalStyles />
    </React.StrictMode>
  </>
)
