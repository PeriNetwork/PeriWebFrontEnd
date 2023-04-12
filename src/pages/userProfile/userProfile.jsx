import React from "react";
import PerfilPage from "../../components/perfilPage/PerfilPage";
import Post from "../../components/post/Post";
import PostShare from "../../components/postShare/PostShare";
import SearchTopo from "../../components/searchTopo/SearchTopo";

import './UserProfile.css'
const UserProfile = () => {
    return (
        <div className="UserProfile">
         <SearchTopo/>
         <PerfilPage/>
         <PostShare/>
         <Post/>
        </div>
    )

}

export default UserProfile