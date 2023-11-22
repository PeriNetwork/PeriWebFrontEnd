import { db } from "../connect.js";
import jwt from "jsonwebtoken";

export const getLikes = (req, res) => {
  const q = "SELECT user FROM like_peri WHERE post = ?";
  db.query(q, [req.query.post_id], (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).json(err);
    }
    return res.status(200).json(data.map((like) => like.userId));
  });
};


export const addLike = (req, res) => {
  const token = req.cookies.accessToken;

  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const qCheckLike = "SELECT * FROM like_peri WHERE `user` = ? AND `post` = ?";
    const valuesCheckLike = [userInfo.id, req.body.post_id];

    db.query(qCheckLike, valuesCheckLike, (checkLikeErr, checkLikeData) => {
      if (checkLikeErr) {
        console.log(checkLikeErr);
        return res.status(500).json(checkLikeErr);
      }

      if (checkLikeData.length > 0) {
        // User has already liked the post, so unlike it
        const qDeleteLike = "DELETE FROM like_peri WHERE `user` = ? AND `post` = ?";
        const valuesDeleteLike = [userInfo.id, req.body.post_id];

        db.query(qDeleteLike, valuesDeleteLike, (deleteErr, deleteData) => {
          if (deleteErr) {
            console.log(deleteErr);
            return res.status(500).json(deleteErr);
          }

          return res.status(200).json("Unliked");
        });
      } else {
        // User hasn't liked the post, so add a new like
        const qAddLike = "INSERT INTO like_peri (`user`,`post`) VALUES (?)";
        const valuesAddLike = [userInfo.id, req.body.post_id];

        db.query(qAddLike, [valuesAddLike], (addErr, addData) => {
          if (addErr) {
            console.log(addErr);
            return res.status(500).json(addErr);
          }

          return res.status(200).json("Liked");
        });
      }
    });
  });
};



