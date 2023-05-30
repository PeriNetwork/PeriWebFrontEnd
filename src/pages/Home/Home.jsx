import React from "react";
import "./Home.css";
import PostShare from "../../components/postShare/PostShare";
import Post from "../../components/post/Post";
import NavBar from "../../components/searchTopo/SearchTopo";
import { FaSearch } from "react-icons/fa";
const Home = () => {
    return (
      
    <div className="Home" > 
     <NavBar/> 
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