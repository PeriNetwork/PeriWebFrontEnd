import React from "react";
import userPeri from "../../components/searchTopo/iconsNav/user.png";
import {AiFillLike} from 'react-icons/ai';
import {MdInsertComment} from 'react-icons/md';
import NavBar from "../../components/searchTopo/SearchTopo";
import "./Notificacao.css";

const Notification = () => {
  return (
    <div className="not">
      <NavBar />
    <div className="notification">
      <AiFillLike className="not-icon" />
      <img src={userPeri} alt="user" height={56} />
      <div className="details">
        <h1 id="userName">Guilherme Nallin</h1>
        <span id="notificationText">Curtiu sua postagem!</span>
      </div>
      </div>
    <br /> <br />
      <div className="notification">
      <MdInsertComment className="not-icon"/>
      <img src={userPeri} alt="user" height={56} />
      <div className="details">
        <h1 id="userName">Guilherme Nallin</h1>
        <span id="notificationText">Comentou em sua postagem!</span>
      </div>
      </div>
      </div>
    
  );
};

export default Notification;
