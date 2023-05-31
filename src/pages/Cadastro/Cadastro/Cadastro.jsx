import React from "react";
import { useState, useRef } from "react";
import logo from "./img/Peri.jpg";
import "./Cadastro.css";
import { Link } from "react-router-dom";
function Cadastro() {
  const [state, setState] = useState(false);

  return (
    <div className="bg1">
    <div className="form-container">
      <div className="header">
        <img src={logo} alt="Logo da Rede Social" />
        <h1>
          BEM-VINDE AO PERI<i>!</i>
        </h1>
      </div>

      <form>
        <label htmlFor="first-name">Nome:</label>
        <input type="text" id="first-name" name="first-name" className="inputTxt" required />

        <label htmlFor="last-name">Sobrenome:</label>
        <input type="text" id="last-name" name="last-name" className="inputTxt" required />

        <label htmlFor="birthdate">Data de Nascimento:</label>
        <input type="date" id="birthdate" name="birthdate" className="inputTxt" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" className="inputTxt" required />

        <label htmlFor="password">Senha:</label>
        <input type="password" id="password" name="password" className="inputTxt" required />

        <label htmlFor="username">Nome de Usuário:</label>
        <input type="text" id="username" name="username" className="inputTxt" required />

        <label htmlFor="profile-name">Nome do Perfil:</label>
        <input type="text" id="profile-name" name="profile-name" className="inputTxt" required />

        <label htmlFor="profile-pic">Foto de Perfil:</label>
        
        <input  
        className="inputImg"
          type="file"
          id="profile-pic"
          name="profile-pic"
          accept="image/*"
          required
          
        />

        <button type="submit">Cadastrar</button>
      </form>

      <p>
        Já possui uma conta? Faça login <Link to={"/"}>aqui</Link>.
      </p>
    </div>
    </div>
  );
}

export default Cadastro;
