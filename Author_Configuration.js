const connection = require("./Conn");
const express = require("express");
const App = express.Router();

App.post('/Add_Author', (req, res) => {
      const { name, bio } = req.body;
      const sql = "INSERT INTO author(name, bio) VALUES(?, ?)";
      connection.query(sql, [ name, bio ], (err) => {
        if (err) {
            throw err;
        } else {
            res.json({message: "Author Added Successfully"});
        }
      }) 
})


module.exports = App;