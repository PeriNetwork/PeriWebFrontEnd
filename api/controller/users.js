import { db } from "../connect.js";
import jwt from "jsonwebtoken";

export const getUser = (req, res) => {
  const userId = req.params.userId;
  const q = "SELECT * FROM peri_user WHERE id=?";

  db.query(q, [userId], (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }

    if (data[0]) {
      const { password, ...info } = data[0];
      return res.json(info);
    } else {
      return res.status(404).json({ error: "User not found" });
    }
  });
};

