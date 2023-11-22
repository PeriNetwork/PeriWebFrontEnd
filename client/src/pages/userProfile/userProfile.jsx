import React from "react";
import PerfilPage from "../../components/perfilPage/PerfilPage";
import Post from "../../components/post/Post";
import PostShare from "../../components/postShare/PostShare";
import { useParams } from "react-router-dom";
import './UserProfile.css'
const UserProfile = () => {
    const { id } = useParams();
    return (
        <div className="userProfile">
         <PerfilPage/>
         <PostShare/>
         <Post/>
        </div>
    )

}

export default UserProfile