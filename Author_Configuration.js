const connection = require("./Conn");
const express = require("express");
const router = express.Router();

router.post('/', (req, res) => {
      const { name, bio } = req.body;
      const sql = "INSERT INTO author(name, bio) VALUES(?, ?)";
      connection.query(sql, [ name, bio ], (err) => {
        if (err) {
            res.json({error: err.message});
        } else {
            res.json({message: "Author Added Successfully"});
        }
      }) 
});

router.get('/', (req, res) => {
      const sql = "SELECT * FROM author";
      connection.query(sql, (err, data) => {
        if (err) {
            res.json({error: err.message});
        } else {
            res.json(data);
        }
      }) 
});


module.exports = router;