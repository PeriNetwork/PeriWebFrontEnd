import React, { useContext } from "react";
import { useState, useRef } from "react";
import userImg from "../../img/userimg.png";
import { UilScenery } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import {
  useMutation,
  QueryClient,
  useQueryClient,
} from "react-query";
import "./PostShare.css";
import { AuthContext } from "../../data/authContext";
import { makeRequest } from "../../data/axios";

const PostShare = () => {
  const { currentUser } = useContext(AuthContext);

  const QueryClient = useQueryClient()

  const upload = async () =>{
    try{
      const formData = new FormData();
      formData.append("file", file)
      const res = await makeRequest.post("/upload", formData);
      return res.data
    }catch(err){
      console.log(err)
    }
  }

  const mutation = useMutation((newPost)=>{
    return makeRequest.post("/posts", newPost);
   
  },
  {
    onSuccess: () => {
      QueryClient.invalidateQueries(["posts"]);
    }
  });

  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const imageRef = useRef();

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });

      // Atualizar o estado com o arquivo selecionado
      setFile(img);
    }
  };

  const [file, setFile] = useState(null);

  const handleClick = async (e) =>{
    e.preventDefault();
    let imgUrl = "";
    if (file) imgUrl = await upload();
    mutation.mutate({description, img: imgUrl})
  };

  return (
    <div className="PostShareBtn">
      <div className="PostShare">
        <img src={"./userpics/" + currentUser.foto_pfp} alt="" />
        <div>
          <input
            type="text"
            placeholder="O que você tem para compartilhar?"
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="postOptions">
            <div className="option" onClick={() => imageRef.current.click()}>
              <UilScenery />
              Photo
            </div>
            <button className="button ps-btn" id="shareShow" onClick={handleClick}>
              Share
            </button>
            <div style={{ display: "none" }}>
              <input
                type="file"
                name="myImage"
                ref={imageRef}
                onChange={onImageChange}
              />
            </div>
          </div>
          {image && (
            <div className="previewImage">
              <UilTimes className="close" onClick={() => setImage(null)} />
              <img src={image.image} alt="" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostShare;
