import userPeri from "../../components/searchTopo/iconsNav/user.png";

import "./Notificacao.css";

export default function Notification() {
  return (
    <>
      <div className="notification">
        <img src={userPeri} alt="user" height={56} />
        <div className="details">
          <h1 id="userName"> Guilherme Nallin</h1>
          <span id="notificationText">Curtiu sua postagem !</span>
        </div>
      </div>
    </>
  );
}