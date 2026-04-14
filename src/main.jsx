import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router'
import RootLayout from './layout/RootLayout'
import HomePage from './pages/homePage/HomePage'
import AppPages from './pages/AppPages/AppPages'
import InstallPages from './pages/InstallPages/InstallPages'

const router = createBrowserRouter([
  {
    path: '/', 
    Component: RootLayout,
    children: [
      {
        index: true, 
        Component: HomePage,
      },
      {
        path: '/home',
        Component: HomePage,
      },
      {
        path: '/apps',
        Component: AppPages,
      },
      {
        path: '/installed',
        Component: InstallPages,
      }
    ]
  },
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
