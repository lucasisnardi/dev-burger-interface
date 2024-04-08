import React from 'react'
import { createRoot } from 'react-dom'

import Login from './containers/Login'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>
)
