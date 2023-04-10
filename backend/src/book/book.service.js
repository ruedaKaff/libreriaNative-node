import {response} from "express";
import { connection } from "../common/connection.js";
import "dotenv/config.js"

const find = (req, res = response) => {
    connection.query(
        `
        select libro.title_book, autor.name_author, publisher.name_publisher, libro.genre_book, libro.price_book
        from libro
        Inner join autor on libro.id_Author = autor.id_author
        Inner join publisher on libro.id_Publisher = publisher.id_publisher;
        `
        ,
        [],
        function (err, result, fields) {
            result.length == 0
            ? res.status(404).json({response: process.env.DEFAULT})
            : res.json(result);

        }
    );
};

const create = (req , res = response ) => {
    const {id_Author, id_Publisher, tittle_book, genre_book, price_book} = req.body;
    connection.query(
        `
        INSERT INTO libro (id_Author, id_Publisher, title_book, genre_book, price_book)
        VALUES (?,?,?,?,?)
        `
        ,[id_Author, id_Publisher, tittle_book, genre_book, price_book],
        function (err, result, fields) {
            err ? res.json(err) : res.json(result);
        }
    );

};

const remove = (req, res = response) => {

    connection.query (
        `
        DELETE FROM libro 
        Where id_book = ?
        `
        ,[req.params.id_book],
        function(err, result, fields) {
            err ? res.json(err): res.json(result);
        }
    );
};

export { find,create,remove };