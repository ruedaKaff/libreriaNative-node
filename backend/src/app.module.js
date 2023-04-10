import express, {json} from "express";
import cors from "cors";
import book from "./book/book.module.js"
import "dotenv/config.js";


const app = express();

app
    .use(cors())
    .use(json())
    .use("/books", book);

export {
    app
};