import React from "react";
import PerfilPage from "../../components/perfilPage/PerfilPage";
import Post from "../../components/post/Post";
import SearchTopo from "../../components/searchTopo/SearchTopo";

import './UserProfile.css'
const UserProfile = () => {
    return (
        <div className="UserProfile">
         <SearchTopo/>
         <PerfilPage/>
         <Post/>
        </div>
    )

}

export default UserProfile