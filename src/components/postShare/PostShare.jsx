import React from "react";
import { useState, useRef } from "react";
import userImg from "../../img/userimg.png";
import {UilScenery} from "@iconscout/react-unicons";
import {UilTimes} from "@iconscout/react-unicons";

import './PostShare.css'
const PostShare = () => {
  
  const [isOverflowHidden, setIsOverflowHidden] = useState(false);
  const [show, setShow] = useState(false);
  
  const naoScroll = () => {
    setIsOverflowHidden(true);
    document.body.style.overflow = 'hidden';
  };
  
  const [image, setImage] = useState(null);
  const imageRef = useRef();
  
  const handleClick = () => {
    naoScroll();
    setShow(true);
  };
  

  const onImageChange = (event) => {
    if(event.target.files && event.target.files[0]){
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };
    return (
        <div className="PostShareBtn">
      { show &&
      <div className="PostShare">
      <img src={userImg} alt="" />
      <div>
        <input type="text" placeholder="O que você tem para compartilhar?" />
        <div className="postOptions">
          <div className="option"
          onClick={()=>imageRef.current.click()}>
            <UilScenery />
            Photo
          </div>
          <button className="button ps-btn" id="shareShow" >
            Share
          </button>
          <div style={{display: "none"}}>
            <input type="file" name="myImage" ref={imageRef} onChange={onImageChange}/>
          </div>
          </div>
          {image && (
            <div className="previewImage">
              <UilTimes className="close" onClick={()=>setImage(null)}/>
              <img src={image.image} alt="" />
            </div>
          )}
        </div>
      </div>
}

      <button type="button"  style={{
          overflowY: isOverflowHidden ? "hidden" : "auto",
        }} className="btnShare" onClick={handleClick} >+</button>
       
        </div>
        
    )

}

export default PostShare