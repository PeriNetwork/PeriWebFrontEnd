import React from "react";
import header from '../../img/header.png'
import userImage from '../../img/userimg.png'

import './PerfilPage.css'
const PerfilPage = () => {
    return (
<div className="PerfilPage">
        <div className="profileImage">
        
            <img src={header} alt="" />
            <img src={userImage} alt="" />

        </div>

        <div className="profile">

        <div className="profileName">
            <span>Alissa</span>
            <span>@AlissaArt</span>
        </div>

        <div className="followStts">
            
            <div className="follows">
                230 seguindo
            </div>
            <div className="vl"></div>
            <div className="follows">
                1500 seguidores
            </div>


        </div>
        </div>
</div>
    )

}

export default PerfilPage