import './App.css';
import React, { useContext } from 'react';
import { createBrowserRouter, RouterProvider, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from './data/authContext';
import { QueryClient, QueryClientProvider } from 'react-query';
import SearchTopo from './components/searchTopo/SearchTopo';
import PerfilPage from './components/perfilPage/PerfilPage';
import Home from './pages/Home/Home';
import LoginForm from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro/Cadastro';
import Notificacao from './pages/Notificacoes/Notificacao';


const App = () => {
  const { currentUser } = useContext(AuthContext);

  const queryClient = new QueryClient();

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  const Layout = ({ children }) => {
    return (
      <QueryClientProvider client={queryClient}>
        <div>
          <SearchTopo />
          {children}
        </div>
      </QueryClientProvider>
    );
  };

  const router = createBrowserRouter([
    {
      path: "*",
      element: (
        <ProtectedRoute>
          <Layout>
            <Routes>
              <Route index element={<Home />} />
              <Route path="profile/*" element={<PerfilPage />} />
              <Route path="/notificacoes" element={<Notificacao />}/>
            </Routes>
          </Layout>
        </ProtectedRoute>
      ),
    },
    {
      path: "/login",
      element: <LoginForm />,
    },
    {
      path: "/cadastro",
      element: <Cadastro />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
