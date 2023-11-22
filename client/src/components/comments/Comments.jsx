import { useContext, useState } from "react";
import "./Comments.css";
import { AuthContext } from "../../data/authContext";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { makeRequest } from "../../data/axios";
import moment from "moment";

const Comments = ({ post_id }) => {
  const [descricao, setDesc] = useState("");
  const { currentUser } = useContext(AuthContext);
  console.log("CURRENT USER:"+ currentUser); 

  const { isLoading, error, data } = useQuery(["comments", post_id], () =>
  makeRequest.get("/comments/getComments?post_id=" + post_id).then((res) => {
    console.log("Comment Data:", res.data);
    return res.data;
  })
);


const queryClient = useQueryClient();

const mutation = useMutation(
  (newComment) => {
    return makeRequest.post("/comments/addComment", newComment);
  },
  {
    onSuccess: () => {
      queryClient.invalidateQueries(["comments"]);
    },
  }
);


  const handleClick = async (e) => {
    e.preventDefault();
    mutation.mutate({ descricao, post_id });
    setDesc("");
  };

  return (
    <div className="comments">
      <div className="write">
        <input
          type="text"
          placeholder="Deixe seu comentário:"
          value={descricao}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button onClick={handleClick}>Publicar</button>
      </div>
      {error
        ? "Something went wrong"
        : isLoading
        ? "loading"
        : data.map((comment) => (
            <div className="comment">
              <img src={"/userpics/" + comment.pfp} alt="" />
              <div className="info">
                <span>{comment.user_name}</span>
                <p>{comment.descricao}</p>
              </div>
              <span className="date">
                {moment(comment.createdAt).fromNow()}
              </span>
            </div>
          ))}
    </div>
  );
};

export default Comments;