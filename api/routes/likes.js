import express from 'express';
import { getLikes, addLike } from "../controller/likes.js";

const router = express.Router();

router.get("/getLikes", getLikes);
router.post("/addLike", addLike);


export default router;