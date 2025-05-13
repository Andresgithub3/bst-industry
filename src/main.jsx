import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import HomePage from './pages/HomePage.jsx'
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen.jsx'
import ProfileSetup from './components/ProfileSetup/ProfileSetup.jsx'
import UserProfile from './pages/UserProfile.jsx'
import EventDetails from './pages/EventDetails.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      // add the child routes here, this is the sample pattern for a child route
      // { path: '/', element: <ComponentPageSample /> }, this is the sample pattern for a child route
      { path: '/', element: <HomePage /> },
      {path: '/welcome', element: <WelcomeScreen />},
      {path: '/profile', element: <ProfileSetup />},
      {path: '/profile/user', element: <UserProfile />},
      {path: '/event/:id', element: <EventDetails />}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
