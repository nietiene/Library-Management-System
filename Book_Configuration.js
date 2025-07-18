const express = require("express");
const connection = require("./Conn");
const router = express.Router();


router.post('/', (req, res) => {
     const { title, isbn, publisher, publication_year, copies_available, category } = req.body;

     const sql = "INSERT INTO book(title, isbn, publisher, publication_year, copies_available, category) VALUES(?,?,?,?,?,?)";
     connection.query(sql, [ title, isbn, publisher, publication_year, copies_available, category ], (err) => {
        if (err) {
            res.json({error: err.message});
        } else {
            res.json({message: "New Book Addedd successfully"});
        }
     });
});

router.get('/:book_id', (req, res) => {
        const { book_id } = req.params;
        const sql = " SELECT * FROM book WHERE book_id = ?";
        connection.query(sql, [book_id] , (err, data) => {
            if (err) {
               res.json({error: err.message});
            } else {
                 res.json({Book_List: data});
           }
        });
});

router.delete('/:book_id', (req, res) => {
        const { book_id } = req.params;
        const sql = "DELETE FROM book WHERE book_id = ?";
        connection.query(sql, [book_id] , (err) => {
            if (err) {
               throw err;
            } else {
                 res.json({message: "Book deleted successfully !!"});
           }
        });
});


router.put('/:book_id', (req, res) => {
      const { book_id } = req.params;
      const { title, isbn, publisher, publication_year, copies_available, category } = req.body; 

      const sql = "UPDATE book SET  title = ?, isbn = ?, publisher = ?, publication_year = ?, copies_available = ?, category = ? WHERE book_id = ?";
      connection.query(sql, [ title, isbn, publisher, publication_year, copies_available, category, book_id], (err) => {
        if (err) {
            res.json({ERROR: err.message});
        } else {
            res.json({message: "Book Updated successfully"});
        }
      });
});
router.get('/', (req, res) => {

      const sql = "SELECT * FROM book";
      connection.query(sql, (err, data) => {
        if (err) {
            res.json({ERROR: err.message});
        } else {
            res.json({bookList: data});
        }
      });
});


// Available Books

router.get('/Book_List/available', (req, res) => {
    const sql = "SELECT * FROM book WHERE copies_available > 0";
    connection.query(sql, (err, data) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ books: data });
    });
});

// Search Boook
router.get('/search/new', (req, res) => {
    //http://localhost:3000/books/search/new?query=react js% to search in the postman
    const search = req.query.query;
    const sql = `SELECT * FROM book WHERE  title LIKE ?`;
    const searchedValue =  `%${search}%`;
    
    connection.query(sql, [searchedValue], (err, data) => {
        if (err) {
            res.json({error: err.message});
        } else {
            res.json({searchedBook: data});
        }
    });
});


module.exports = router;