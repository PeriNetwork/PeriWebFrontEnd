import React from "react";
import userPeri from "../../components/searchTopo/iconsNav/user.png";
import {AiFillLike} from 'react-icons/ai';
import {MdInsertComment} from 'react-icons/md';
import { makeRequest } from "../../data/axios";
import { useQuery } from "react-query";
import "./Notificacao.css";

const Notification = () => {

  const { isLoading, error, data } = useQuery(["comments"], () =>
  makeRequest.get("/comments/notiComment").then((res) => {
    console.log("Comment Data:", res.data);
    return res.data;
  })
);


  return !isLoading ? data.map((comentario) => 
    <>
    <div className="not">
    <br /> <br />
      <div className="notification">
      <MdInsertComment className="not-icon"/>
      <img src={userPeri} alt="user" height={56} />
      <div className="details">
        <h1 id="userName">{comentario.user_name}</h1>
        <span id="notificationText">{comentario.descricao}</span>
      </div>
      </div>
      </div>
    </>
  ) : <p>Loading...</p>;
};

export default Notification;
