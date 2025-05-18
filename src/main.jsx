import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { router } from './Router/Router.jsx'
import Homelayout from './Leyout/Homelayout.jsx'
import AuthProvider from './AuthContex/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>
        <Homelayout></Homelayout>
      </RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
