const connection = require("./Conn");
const express = require("express");
const router = express.Router();

router.post('/', (req, res) => {

      const { name, email, phone, address, membership_date } = req.body;
      const sql = "INSERT INTO member(name, email, phone, address, membership_date) VALUES(?, ?, ?, ?, ?)";
      connection.query(sql, [ name, email, phone, address, membership_date ], (err) => {
        if (err) {
            res.json({error: err.message});
        } else {
            res.json({message: "Member Added Successfully"});
        }
      }) 
});

// router.get('/', (req, res) => {
//       const sql = "SELECT * FROM author";
//       connection.query(sql, (err, data) => {
//         if (err) {
//             res.json({error: err.message});
//         } else {
//             res.json({Author: data});
//         }
//       }) 
// });

// router.put('/:author_id', (req, res) => {
//      const { author_id } = req.params;
//      const { name, bio } = req.body;

//      const sql = "UPDATE author SET name = ? , bio = ? WHERE author_id = ?";
//      connection.query(sql, [name, bio, author_id], (err) => {

//       if (err) {
//         res.json({error: err.message});
//       }else{
//         res.json({message: "Author Updated Successfully"});
//       }
//      });
// });

// router.get('/:author_id', (req, res) => {

//       const { author_id } = req.params;
//       const sql = "SELECT * FROM author WHERE author_id = ?";
//       connection.query(sql, [author_id], (err, data) => {
//         if (err) {
//             res.json({errorMessage: err.message});
//         } else {
//             res.json({Author: data});
//         }
//       }) 
// });

// router.delete('/:author_id', (req, res) => {

//       const { author_id } = req.params;
//       const sql = "DELETE FROM author WHERE author_id = ?";
//       connection.query(sql, [author_id], (err) => {
//         if (err) {
//             res.json({err: err.message});
//         } else {
//           res.json("Author Deleted successfully");
//         }
//       }) 
// });




module.exports = router;