import './App.css'
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from './pages/Login/Login';
import UserProfile from './pages/userProfile/UserProfile';
import Cadastro from './pages/Cadastro/Cadastro/Cadastro';
import Notificacoes from './pages/Notificacoes/Notificacao';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/user" element={<UserProfile />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/notificacoes" element={<Notificacoes />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
