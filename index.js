import express from "express";
const app = express();
import {connectDB} from "./database.js"
import router from "./routers/books_routes.js"
import "dotenv/config";

connectDB();
app.use(express.json());
app.use("/",router);

app.listen(5000,()=>{
    console.log("App running on port 5000")
})