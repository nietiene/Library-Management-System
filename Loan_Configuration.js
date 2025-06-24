const express = require("express");
const connection = require("./Conn");
const router = express.Router();

router.get('/borrow', (req, res) => {
    const {book_id} = req.body;
    const member_id = req.session.member_id;
    const staff_id = null;
    const loan_date = new Date();

    const return_date = new Date();
    return_date.setDate(loan_date.getDate() + 7);
    
    const status = "Borrowed";

    if (!member_id && !book_id) {
        return res.json({error: "Missing book or book ID"});
    }
})


module.exports = router;