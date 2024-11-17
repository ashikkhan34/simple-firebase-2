import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './utils/router'
import AuthProvider from './Components/AuthProvider/AuthProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <AuthProvider routes={<RouterProvider router={router}></RouterProvider>}>

    </AuthProvider>
  </StrictMode>,
)

