    const express = require("express");
    const router = express.Router();

    router.get('/login', (req, res) => {
        req.session.destroy((err) => {
            if (err) {
                res.json({error: "Logout Failed Try again"});
            } else {
                res.json({message: "Logged Out"});
            }
        });
    });

module.exports = router