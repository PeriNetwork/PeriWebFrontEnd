import React, { useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { FaRegCommentDots } from 'react-icons/fa';
import './Postagem.css'

const Postagem = ({data}) => { 

      
    const imagem = <img src={data.conteudo}  alt="" id="img" />
    const texto = <span>{data.conteudo}</span>
    
    //const [isLiked, setIsLiked] = useState(false);

    //const handleLike = () => {
        
   //   };


    return (
       
<div className="Postagem">

<div className="userDados">
        <div className="pfp">
        <img src={data.userImg} alt="" />
        </div>

        <div className="about">
        <span><b>{data.name}</b></span>
        </div>  
        </div>

        <div className="postReaction">

        <div className="icones">

        <button className="button-heart">
        <AiOutlineHeart className="heart-icon"/>
      </button>

        <br />

        <button className="button-heart">
        <FaRegCommentDots className="heart-icon"/>
        </button>


</div>

<div className="container container-fluid">
<div className="row">
<div className="content">

{data.imagem?imagem: texto}


</div>
</div>
</div>
</div>
        <div className="descricao">
        <div className="likes">{data.likes} Likes</div>
        <span> {data.descricao} </span>
       </div>
       
        </div>

    )


}

export default Postagem
