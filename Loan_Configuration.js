const express = require("express");
const connection = require("./Conn");
const router = express.Router();

router.post('/borrow', (req, res) => {
   console.log("session content", req.session);
    const { book_id } = req.body;
    console.log("received book_id", book_id);
    const member_id = req.session.member_id;
    const staff_id = null;
    const loan_date = new Date();

    const return_date = new Date();
    return_date.setDate(loan_date.getDate() + 7);
    
    const status = "Borrowed";

    if (!member_id || !book_id) {
        return res.json({error: "Missing book or member ID"});
    }

    const sql = `SELECT copies_available FROM book WHERE book_id = ?`;
    connection.query(sql, [book_id], (err, result) => {
       if (err) return res.json({error: err.message});

       if (result.length === 0) {
        return res.json({error: "Book not available"});
       }

       const loanSql = `INSERT INTO loan (book_id, member_id, staff_id, loan_date, return_date, status)
                        VALUES(?, ?, ?, ?, ?, ?)`;
       
      connection.query(loanSql,
                       [book_id, member_id, staff_id, loan_date, return_date, status],
                       (err2) => {
                          if (err2) return res.json({error: err2.message});

                          const update = `UPDATE book SET copies_available = copies_available - 1 WHERE book_id = ?`;
                          connection.query(update, [book_id], (err3) => {
                             if (err3) return res.json({error: err3.message});

                             res.json({message: "Book borrowed successfully"});
                          });
                       }
      )                  
    });


});


router.post('/return', (req, res) => {
      const { book_id } = req.body;
      const member_id = req.session.member_id;
      
      if (!member_id || !book_id) {
         return res.json({error: "Missing book id or member id"});
      }

      const UpdateLoan = `
                           UPDATE loan SET status = 'Returned'
                           WHERE book_id = ? AND member_id = ? AND status = 'Borrowed'
                           ORDER BY loan_date DESC
                           LIMIT 1
                           `;
      connection.query(UpdateLoan, [book_id, member_id], (err, data) => {
         if (err) {
            return res.json({error: err.message});
         } 

         if (data.affectedRows === 0) {
            return res.json({error: "No active loan found on this book"});
         }

         const updatedBook = `
                             UPDATE book SET copies_available = copies_available + 1
                             WHERE book_id = ?
                              `;
         
         connection.query(updatedBook, [book_id], (err2) => {
                if (err2) return res.json({error: err2.message});
                
                res.json({message: "Book returned Successfully"});
                
         });                     
      });                     
});

//user view only his loan
router.get('/view_loan/:member_id', (req, res) => {
   const member_id = req.params;
   const sql = "SELECT * FROM loan WHERE member_id = ?";
   connection.query(sql, [member_id], (err, data) => {
      if (err) return res.json({error: err.message});

      return res.json({loans: data});
   });
});

module.exports = router;