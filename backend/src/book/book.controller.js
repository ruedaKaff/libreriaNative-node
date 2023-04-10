import { Router } from "express";
const book = Router();
import {find, create, remove } from "./book.service.js";

book.get(
    "/",
    find
);

book.create