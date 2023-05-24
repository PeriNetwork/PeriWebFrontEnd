import React from "react";
import logo from "./img/Peri.jpg";
import "./Login.css";
import { Link } from "react-router-dom";
function LoginForm() {
  return (
    <div className="bg">
    <div className="login-form">
      <div className="logo">
        <img src={logo} alt="Peri Logo" />
        <h1>Bem-vinde ao Peri</h1>
      </div>
      <form>
        <input type="text" name="username" placeholder="Usuário" required />
        <input type="password" name="password" placeholder="Senha" required />
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
