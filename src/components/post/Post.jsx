import React from "react";
import {ProfileFeed} from "../../data/ProfileFeed"
import './Post.css'
import Postagem from "../postagem/Postagem";
const Post = ({data}) => {
    return (
        <div className="Post">
         {ProfileFeed.map((post, id)=>{
            return <Postagem data={post} id={id}/>
         })}

        </div>
    )
}

export default Post