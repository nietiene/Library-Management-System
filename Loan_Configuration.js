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

    const sql = `SELECT copies_available FROM book WHERE book_id = ?`;
    connection.query(sql, [book_id], (err, result) => {
       if (err) return res.json({error: err.message});

       if (result.length === 0 && result[0].copies_available < 1) {
        return res.json({error: "Book not available"});
       }

       const loanSql = `INSERT INTO loan (book_id, member_id, staff_id, loan_date, return_date, status)
                        VALUES(?, ?, ?, ?, ?, ?)`;
       
      connection.query(loanSql,
                       [book_id, member_id, loan_date, return_date, status],
                       (err2) => {
                          if (err2) return
                       }
      )                  
    });


});


module.exports = router;