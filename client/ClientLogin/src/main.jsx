import React from 'react';
import ReactDOM from 'react-dom/client';
import { RegisterPage } from './AppContainer/Register/RegisterPage';
import { LoginPage } from './AppContainer/Login/LoginPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './AppContainer/Pages/ErrorPage';
import { GiffPage } from './AppContainer/Pages/GiffPage';
import { Test } from './AppContainer/Pages/Test';
import { SavedGifs } from './AppContainer/Pages/SavedGifs';


const router = createBrowserRouter([
  {
    path: "/",
    element: <RegisterPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/giff",
    element: < GiffPage />
  },
  {
    path: "/savedgif",
    element: <SavedGifs/>
  },
  
  {
    path: "/test",
    element: < Test />
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>,
)
