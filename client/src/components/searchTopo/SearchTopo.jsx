import React, { useContext } from "react";
import { Link } from "react-router-dom";
import homePeri from "./iconsNav/homePeri.png";
import { AuthContext } from "../../data/authContext";
import { useQuery } from "react-query";
import { makeRequest } from "../../data/axios";
import { BsBell } from "react-icons/bs";
import './SearchTopo.css';

const SearchTopo = () => {
  const { currentUser } = useContext(AuthContext);

  console.log(currentUser);

  const pfpImage = `../userpics/${currentUser.foto_pfp ?? 'defaultpfp.png'}`;

  return (
    <nav>
      <div className="logo">
        <Link to={"/"}>
          <img src={homePeri} alt="homePeri" />
        </Link>
      </div>

      <div className="logo2">
        <Link to={"/notificacoes"}>
          <BsBell className="bell" />
        </Link>
      </div>

      <div className="logo3">
        <Link to={`/profile/${currentUser.id}`}>
          <img src={pfpImage} alt="Foto de Perfil" />
        </Link>
      </div>
    </nav>
  );
}

export default SearchTopo;
