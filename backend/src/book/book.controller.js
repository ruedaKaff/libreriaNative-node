import { Router } from "express";

import {find, create, remove } from "./book.service.js";
const book = Router();

book.get(
    "/",
    find
);

book.post(
    "/", 
    create
);

book.delete(
    "/:id_book",
    remove
);

export {
    book
}