import {db} from "../connect.js";
import jwt  from "jsonwebtoken";
import moment from "momnet/moment.js";

export const getComments = (req, res) => {
  const q = `
    SELECT c.*, u.foto_pfp, u.name AS user_name
    FROM comment_peri AS c
    JOIN peri_user AS u ON (c.user_id = u.id)
    WHERE c.post_id = ?
    ORDER BY c.createdAt DESC;
  `;

  db.query(q, [req.query.post_id], (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).json(err);
    }

    // Adjust the response to include the 'pfp' property in each comment object
    const commentsWithPfp = data.map(comment => ({
      ...comment,
      pfp: comment.foto_pfp
    // Assuming 'pfp' is the correct property name in your user table
    }));

    return res.status(200).json(commentsWithPfp);
  });
};


export const addComments = (req, res) => {
  const token = req.cookies.accessToken;
 
   if (!token) return res.status(401).json("Not logged in");
 
   jwt.verify(token, "secretkey", (err, userInfo) => {
     if (err) return res.status(403).json("Token is not valid");
 
     const q = "INSERT INTO comment_peri (`descricao`, `createdAt`, `user_id`, `post_id`) VALUES (?)";
  
   const values = [
    req.body.descricao,
    moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
    userInfo.id,
    req.body.post_id
   ];
 
     db.query(q, [values], (err, data) => {
       if (err) {
         console.log(err)
         return res.status(500).json(err);
       } 
       
       return res.status(200).json("Comentario criado");
     });
   });
 };


 export const notiComments = (req, res) => {
  const token = req.cookies.accessToken;
 
   if (!token) return res.status(401).json("Not logged in");
 
   jwt.verify(token, "secretkey", (err, userInfo) => {
     if (err) return res.status(403).json("Token is not valid");
 
     const q = `SELECT c.*, u.foto_pfp, u.name AS user_name
     FROM comment_peri AS c
     INNER JOIN post_peri as p ON p.id = c.post_id
     INNER JOIN peri_user as u ON u.id = c.user_id
     WHERE u.id = ?
     ORDER BY c.createdAt DESC`;
  
   const values = [
    userInfo.id,
   ];
 
     db.query(q, [values], (err, data) => {
       if (err) {
         console.log(err)
         return res.status(500).json(err);
       } 
       
       return res.status(200).json(data);
     });
   });
 };

     