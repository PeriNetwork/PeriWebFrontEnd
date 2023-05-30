
import React from "react";
import { Link } from "react-router-dom";
import homePeri from "./iconsNav/homePeri.png";
//import bellPeri from "./iconsNav/bell.svg";//
//import createPeri from "./iconsNav/create.png";//
//import searchPeri from "./iconsNav/search.png";//
import userPeri from "../../img/userimg.png";
import {BsBell} from "react-icons/bs";

import './SearchTopo.css'
const SearchTopo = () => {
    return (
      <nav>

      <div className="logo">
      <Link to={"/home"}>
          <img src={homePeri} alt="homePeri" />
        </Link>
      </div>

      <div className="logo2">
      <Link to={"/notificacoes"}>
         <BsBell className="bell" />
        </Link>
      </div>

      <div className="logo3">
        <Link to={"/user"}>
          <img src={userPeri} alt="Foto de Perfil" />
          </Link>
      </div>
    
    </nav>
    )

}

export default SearchTopo