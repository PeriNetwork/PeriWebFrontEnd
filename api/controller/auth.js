import { db } from "../connect.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req, res) => {
  //CHECK USER IF EXISTS

  const q = "SELECT * FROM peri_user WHERE name = ?";

  db.query(q, [req.body.name], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json({ message: "Esse usuário já existe!" });
    
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    const q =
      "INSERT INTO peri_user (`name`,`email`,`password`, `foto_pfp`, `header_pic`) VALUE (?)";

    const values = [
      req.body.name,
      req.body.email,
      hashedPassword,
      req.body.pfp,
      req.body.header
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json({ message: "Conta criada com sucesso" });
    });
  });
};

export const login = (req, res) => {
  const q = "SELECT * FROM peri_user WHERE name = ?";

  db.query(q, [req.body.name], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json({ message: "Usuário não encontrado..." });

    const checkPassword = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );

    if (!checkPassword)
      return res.status(400).json({ message: "Senha ou email errados." });

    const token = jwt.sign({ id: data[0].id }, "secretkey");

    const { password, ...others } = data[0];

    res
      .cookie("accessToken", token, {
        httpOnly: true,
      })
      .status(200)
      .json(others);
  });
};

export const logout = (req, res) => {
  res.clearCookie("accessToken",{
    secure:true,
    sameSite:"none"
  }).status(200).json("User has been logged out.")
};