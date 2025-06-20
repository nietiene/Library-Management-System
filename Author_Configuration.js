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
})


module.exports = router;