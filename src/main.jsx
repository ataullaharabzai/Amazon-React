import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import './index.css'
import MyItems from './components/MyItems.jsx'
import App from './App.jsx'
import Profile from './components/Profile.jsx'
import LoginForm from './components/LoginForm.jsx'

const router = createBrowserRouter([ 
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/myItems', element: <MyItems /> },
      {path: '/profile', element: <Profile />},
      {path: '/login', element: <LoginForm />}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>,
)
