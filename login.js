const express = require("express");
const connection = require("./Conn");
const router = express.Router();

router.post('/login', (req, res) => {

    const { username, password } = req.body;
    const sql = "SELECT * FROM staff WHERE  username = ?, password = ?";
    connection.query(sql, [username, password], (err, data) => {
         if (err) {
            throw err;
         } else {
            req.session.user = {
                staff_id: data[0].staff_id,
                username: data[0].username
            }
            res.json({mesage: "Login Successfully", user: req.session.user})
         }
    })
})

module.exports = router;