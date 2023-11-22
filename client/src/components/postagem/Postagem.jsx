import React, { useContext, useState } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import { Link } from "react-router-dom";
import Comments from "../comments/comments";
import "./Postagem.css";
import { useQuery, useQueryClient, useMutation } from "react-query";
import { makeRequest } from "../../data/axios";
import { AuthContext } from "../../data/authContext";

const Postagem = ({ post }) => {
  const { currentUser } = useContext(AuthContext);
  const queryClient = useQueryClient();

  const { isLoading, data: likesData } = useQuery(["likes", post.id], () =>
    makeRequest.get("/likes/getLikes?post_id=" + post.id).then((res) => res.data)
  );
  
  const mutation = useMutation(
    () => {
      return likesData.includes(currentUser.id)
        ? makeRequest.delete(`/likes/deleteLike?post_id=${post.id}`)
        : makeRequest.post("/likes/addLike", { post_id: post.id });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["likes"]);
      },
    }
  );

  const [commentOpen, setCommentOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(likesData && likesData.includes(currentUser.id));

  const handleLike = () => {
    mutation.mutate();
    setIsLiked(!isLiked);
  };

  return (
    <div className="Postagem">
      <div className="userDados">
        <div className="pfp">
          <img className="pfpImg" src={`/userpics/${post.foto_pfp}`} alt="" />
        </div>
        <div className="about">
          <span>
            <b>
              <Link
                 to={`/profile/${post.userId}`}
                 style={{ textDecoration: "none", color: "inherit" }}
              >
                {post.name}
              </Link>
            </b>
          </span>
        </div>
      </div>

      <div className="postReaction">
        <div className="content">
          <p>{post.description}</p>
          <img className="imgPost" src={`/upload/${post.img}`} alt="" />
        </div>
      </div>

      <div className="info">
        <div className="item" style={{ textDecoration: "none", color: "inherit" }}>
          {isLoading ? (
            "loading"
          ) : isLiked ? (
            <div onClick={handleLike} style={{ color: "red" }}>
              <FavoriteIcon />
            </div>
          ) : (
            <div onClick={handleLike}>
              <FavoriteBorderIcon />
            </div>
          )}
          {likesData?.length} Likes
        </div>

        <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
          <TextsmsOutlinedIcon />
          Comments
        </div>
      </div>

      {commentOpen && <Comments post_id={post.id} />}
    </div>
  );
};

export default Postagem;
