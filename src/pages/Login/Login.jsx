import React from "react";
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import logo from "./img/Peri.jpg";
import "./Login.css";
import { Link } from "react-router-dom";
function LoginForm() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const validacao = (e) => {
    e.preventDefault();

    if (username === 'AlissaArt' && password === '123') {
      navigate('/user');
    } else {
      setUsername('');
      setPassword('');
      Swal.fire({
        title: 'Erro de login!',
        text: 'Usuário ou senha incorretos',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
    }
  };

  return (
    <div className="bg">
    <div className="login-form">
      <div className="logo">
        <img src={logo} alt="Peri Logo" />
        <h1>Bem-vinde ao Peri</h1>
      </div>
      <form onSubmit={validacao}>
        <input type="text" className="inputTxt" name="username" value={username} onChange={handleUsernameChange} placeholder="Usuário" required />
        <input type="password" name="password" className="inputTxt" value={password} onChange={handlePasswordChange} placeholder="Senha" required />
        <button type="submit">Entrar</button>
        <p>
          Não tem uma conta no Peri?{" "}
          <Link to={"/cadastro"}> Junte-se a nós e Cadastre-se aqui</Link>
        </p>
      </form>
    </div>
    </div>
    
  );
}

export default LoginForm;
