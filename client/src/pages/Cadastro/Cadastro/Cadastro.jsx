import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import logo from "./img/Peri.jpg";
import "./Cadastro.css";

function Cadastro() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    pfp: "",
    header: ""
  });

  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");

  const userpics = async (file) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("http://localhost:3002/api/userpics", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    // Verificar se nome, email e senha estão preenchidos
    if (!inputs.name || !inputs.email || !inputs.password) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    try {
      const pfpUrl = await userpics(inputs.pfp);
      const headerUrl = await userpics(inputs.header);

      // Include pfpUrl and headerUrl in the API request body
      const response = await axios.post("http://localhost:3002/api/auth/register", {
        ...inputs,
        pfp: pfpUrl,
        header: headerUrl,
      });

      setMessage(response.data.message);
      setError(null); // Limpar qualquer erro anterior
    } catch (err) {
      setError(err.response.data.message);
      setMessage(""); // Limpar qualquer mensagem anterior
    }
  };

  return (
    <div className="bg1">
      <div className="form-container">
        <div className="header">
          <img src={logo} alt="Logo da Rede Social" />
          <h1>
            BEM-VINDO AO PERI<i>!</i>
          </h1>
        </div>

        <form>
          <div className="form-group">
            <label htmlFor="name">Nome de usuário:</label> <br />
            <input
              type="text"
              id="name"
              name="name"
              className="inputTxt"
              onChange={handleChange}
              autoComplete="name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label> <br />
            <input
              type="email"
              id="email"
              name="email"
              className="inputTxt"
              onChange={handleChange}
              autoComplete="email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Senha:</label> <br />
            <input
              type="password"
              id="password"
              name="password"
              className="inputTxt"
              onChange={handleChange}
              autoComplete="current-password"
              required
            />
          </div>

          <label htmlFor="profile-pic">Foto de Perfil:</label>
          <input
            className="inputImg"
            type="file"
            name="pfp"
            accept="image/*"
            onChange={(e) => setInputs({ ...inputs, pfp: e.target.files[0] })}
          />

          <label htmlFor="header-pic">Foto de Capa:</label>
          <input
            className="inputImg"
            type="file"
            name="header"
            accept="image/*"
            onChange={(e) => setInputs({ ...inputs, header: e.target.files[0] })}
          />

          {error && <div className="error-message">{error}</div>} {/* Mostra a mensagem de erro */}
          {message && <div className="success-message">{message}</div>} {/* Mostra a mensagem do servidor */}
          
          <button className="btn" onClick={handleClick}>
            Cadastrar
          </button>
        </form>

        <p>
          Já possui uma conta? Faça login <Link to={"/login"}>aqui</Link>.
        </p>
      </div>
    </div>
  );
}

export default Cadastro;
