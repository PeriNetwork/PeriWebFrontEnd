import React, { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../data/authContext";
import logo from "./img/Peri.jpg";
import "./Login.css";

function LoginForm() {
  const [inputs, setInputs] = useState({
    name: "",
    password: "",
  });
  const [err, setErr] = useState(null);

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // Validar campos em branco
    if (!inputs.name || !inputs.password) {
      setErr("Por favor, preencha todos os campos."); // Define a mensagem de erro para campos em branco
      return; // Interrompe o processamento da função
    }

    try {
      await login(inputs);
      navigate("/");
    } catch (err) {
      setErr(err.response.data.message); // Define a mensagem de erro recebida do servidor
    }
  };

  return (
    <div className="bg">
      <div className="login-form">
        <div className="logoLogin">
          <img src={logo} alt="Peri Logo" />
          <h1>Bem-vindo ao Peri</h1>
        </div>
        <form>
          <input
            type="text"
            className="inputTxt"
            name="name"
            onChange={handleChange}
            placeholder="nome de usuário"
            required
          />
          <input
            type="password"
            name="password"
            className="inputTxt"
            onChange={handleChange}
            placeholder="Senha"
            required
          />
          {err && <div className="error-message">{err}</div>} {/* Mostra a mensagem de erro na tela */}
          <button className="btn" onClick={handleLogin}>
            Entrar
          </button>
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

