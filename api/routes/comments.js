import express from 'express';
import { getComments, addComments, notiComments } from "../controller/comments.js";

const router = express.Router()

router.get("/getComments", getComments);
router.post("/addComment", addComments);
router.get("/notiComment", notiComments);


export default router