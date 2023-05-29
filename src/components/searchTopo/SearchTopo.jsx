import React from "react";
import { Link } from "react-router-dom";
import homePeri from "./iconsNav/homePeri.png";
import bellPeri from "./iconsNav/bell.svg";
import createPeri from "./iconsNav/create.png";
import searchPeri from "./iconsNav/search.png";
import userPeri from "../../img/userimg.png";

import './SearchTopo.css'

export default function searchTopo() {
  return (
    <div className="navBar">
      <nav>
        <ul>
          <div className="leftIcons">
            <li>
              <Link to={"/home"}>
                <img src={homePeri} alt="home" width={50}/>
                </Link>
            </li>
          </div>
          <div className="centerIcons">
            <li>
              <Link to={"/notificacoes"}>
                <img src={bellPeri} alt="bell" width={50} />
                </Link>
            </li>
            <li>
              <a href="#">
                <img src={createPeri} alt="create" width={36}  />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={searchPeri} alt="search" width={36} />
              </a>
            </li>
          </div>
          <div className="rightIcons">
            <li>
              <Link to={"/user"}>
                <img src={userPeri} className="user" alt="user" width={50}  />
                </Link>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}
