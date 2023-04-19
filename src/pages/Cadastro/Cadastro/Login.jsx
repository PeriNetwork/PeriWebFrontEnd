import React from "react";
import logo from "./img/Peri.jpg";
import "./style.css";

function LoginForm() {
  return (
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
          <a href="cadastro.html">Junte-se a nós e Cadastre-se aqui</a>
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
