import React from "react";
import Postagem from "../postagem/Postagem";
import "./Post.css";
import moment from "moment";
import { useQuery } from "react-query";
import { makeRequest } from "../../data/axios";

const Post = ({ userId }) => {
  const { isLoading, error, data } = useQuery(["posts"], () =>
    makeRequest.get("/posts?userId=" + userId).then((res) => res.data)
  );

  const formatPostDate = (dateString) => {
    return moment(dateString).fromNow(); // Formata a data para "há quanto tempo foi postado"
  };

  return (
    <div className="posts">
      {error ? (
        <div>Error loading posts: {error.message}</div>
      ) : isLoading ? (
        <div>Loading...</div>
      ) : (
        data.map((post) => (
          <Postagem post={post} key={post.id} formattedDate={formatPostDate(post.creat_at)} />
        ))
      )}
    </div>
  );
};

export default Post;
