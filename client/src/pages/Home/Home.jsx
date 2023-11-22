import React from "react";
import "./Home.css";
import PostShare from "../../components/postShare/PostShare";
import Post from "../../components/post/Post";
import { FaSearch } from "react-icons/fa";
const Home = () => {
    return (
      
    <div className="Home" > 
   
    <div className="input-wrapper">
      <FaSearch id="search-icon" 
      />
      <input className="input-busca"
        placeholder="Procurar..."
      />
    </div>
        <PostShare/>
        <Post/>
        </div>
    )
}

export default Home