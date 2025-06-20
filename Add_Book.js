const express = require("express");
const connection = require("./Conn");
const router = express.Router();


router.post('/Add_New_Book', (req, res) => {
     const { title, isbn, publisher, publication_year, copies_available, category } = req.body;

     const sql = "INSERT INTO book(title, isbn, publisher, publication_year, copies_available, category) VALUES(?,?,?,?,?,?)";
     connection.query(sql, [ title, isbn, publisher, publication_year, copies_available, category ], (err) => {
        if (err) {
            res.json({ERROR: err.message});
        } else {
            res.json("New Book Addedd successfully");
        }
     });
});

module.exports = router;