import { db } from "../connect.js";
import jwt from "jsonwebtoken";
import moment from "moment";

export const getPosts = (req, res) => {
  const userId = req.query.userId;
  const token = req.cookies.accessToken;

  if (!token) return res.status(401).json("Not logged in");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid");

    const q =
      userId !== "undefined"
        ? `
        SELECT p.*, u.id AS userId, u.foto_pfp, u.name
        FROM post_peri AS p
        JOIN peri_user AS u ON (u.id = p.userId)
        WHERE p.userId = ?
        ORDER BY p.creat_at DESC;
      `
        : `
        SELECT p.*, u.id AS userId, u.foto_pfp, u.name
        FROM post_peri AS p
        JOIN peri_user AS u ON (u.id = p.userId)
        ORDER BY p.creat_at DESC;
      `;

    const values = userId !== "undefined" ? [userId] : [];

    db.query(q, values, (err, data) => {
      if (err) {
        console.log(err);
        return res.status(500).json(err);
      }

      return res.status(200).json(data);
    });
  });
};

export const addPost = (req, res) => {
  const token = req.cookies.accessToken;

  if (!token) return res.status(401).json("Not logged in");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid");

    const q = "INSERT INTO post_peri (`description`, `img`, `creat_at`, `userId`) VALUES (?)";

    const values = [
      req.body.description,
      req.body.img,
      moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
      userInfo.id
    ];

    db.query(q, [values], (err, data) => {
      if (err) {
        console.log(err);
        return res.status(500).json(err);
      }

      return res.status(200).json("Post criado");
    });
  });
};
