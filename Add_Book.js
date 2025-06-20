const express = require("express");
const connection = require("./Conn");

const app = express();

app.post('/Add_New_Book', (req, res) => {
     const { title, isbn, publisher, publication_year, copies_available, category } = req.body;
})