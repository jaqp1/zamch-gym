import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './routes/About';
import PageNotFound from './routes/PageNotFound';
import Rules from './routes/Rules';
import Contact from './routes/Contact';
import TrainingGenerator from './routes/TrainingGenerator';
import Home from './routes/Home';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <PageNotFound />,
      children: [
        {
          path: '/rules',
          element: <Rules />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/contact',
          element: <Contact />
        },
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/trainingGenerator',
          element: <TrainingGenerator />
        }
      ]
    },
    
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
