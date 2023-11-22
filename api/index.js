import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
import postsRoutes from "./routes/posts.js"
import likesRoutes from "./routes/likes.js"
import commentsRoutes from "./routes/comments.js"
import Express from "express";
import relationshipsRoutes from "./routes/relationships.js"
import cors from "cors";
import multer from "multer";
import cookieParser from "cookie-parser";  // Importe o cookie-parser

const app = Express();

// Middleware
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

app.use(Express.json());
app.use(cors({
    origin: 'http://localhost:5173',  
    credentials: true,
}));
app.use(cookieParser()); 

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, '../client/public/upload') 
},
filename: function (req, file, cb){
    cb(null, Date.now() + file.originalname)
}
});

const upload = multer({storage: storage});

app.post("/api/upload", upload.single("file"), (req, res)=>{
    const file = req.file;
    res.status(200).json(file.filename);
});


const storage2 = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, '../client/public/userpics') 
},
filename: function (req, file, cb){
    cb(null, Date.now() + file.originalname)
}
});

const userpics = multer({ storage: storage2 });

app.post("/api/userpics", userpics.single("file"), (req, res)=>{
    const file = req.file;
    res.status(200).json(file.filename);
});




// Rotas
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postsRoutes);
app.use("/api/likes", likesRoutes);
app.use("/api/comments", commentsRoutes);
app.use("/api/relationships", relationshipsRoutes);

app.listen(3002, () => {
    console.log("Rodando na porta 8800");
});
