import React from "react";
import PerfilPage from "../../components/perfilPage/PerfilPage";
import Post from "../../components/post/Post";
import PostShare from "../../components/postShare/PostShare";


import './UserProfile.css'
const UserProfile = () => {
    return (
        <div className="UserProfile">
         <PerfilPage/>
         <PostShare/>
         <Post/>
        </div>
    )

}

export default UserProfile