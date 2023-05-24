import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'

import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Notificacao from './pages/Notificacoes/Notificacao.jsx';
import ErroPage from './pages/ErroPage.jsx';
import Cadastro from './pages/Cadastro/Cadastro/Cadastro.jsx';
import UserProfile from './pages/userProfile/UserProfile.jsx';
import LoginForm from './pages/Login/Login.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErroPage/>,
    children: [
      {
        path: "user",
        element: <UserProfile/>,
      },
    
      {
        path: "notificacoes",
        element: <Notificacao/>,
      },
      
     {
        path: "cadastro",
        element: <Cadastro/>,
      },

      {
        path: "login",
        element: <LoginForm/>,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
