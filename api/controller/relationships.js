import { db } from "../connect.js";
import jwt from "jsonwebtoken";

export const getRelationships = (req, res) => {
  const q = "SELECT follower_user FROM seguir_peri WHERE followed_user = ?";
  db.query(q, [req.query.followedUserId], (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).json(err);
    }
    return res.status(200).json(data.map(relationship => relationship.follower_user));
  });
};


export const addRelationship = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q = "INSERT INTO seguir_peri (`follower_user`,`followed_user`) VALUES (?)";
    const values = [
      userInfo.id,
      req.body.userId
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Following");
    });
  });
};

export const deleteRelationship = (req, res) => {

  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q = "DELETE FROM seguir_peri WHERE `follower_user` = ? AND `followed_user` = ?";

    db.query(q, [userInfo.id, req.query.userId], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Unfollow");
    });
  });
};



