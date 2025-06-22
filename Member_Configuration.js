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


router.post('/Auth', (req, res) => {
  const {name, email} = req.body;
  const sql = "SELECT * FROM member WHERE name = ? AND email = ?";
  connection.query(sql, [ name, email ], (err, data) => {
    if (err) {
      res.json({error: err.message});

    } if (data.length > 0) {
         req.session.memberInfo = {
            member_id: data[0].member_id,
            name: data[0].name
         }
         req.json({message: "Login Successfully", memberInfo: memberInfo.name});
    } else {
      res.json({error: "Invalid Credentials"});
    }
  });
});


router.get('/', (req, res) => {
      const sql = "SELECT * FROM member";
      connection.query(sql, (err, data) => {
        if (err) {
            res.json({error: err.message});
        } else {
            res.json({Member: data});
        }
      }) 
});

router.put('/:member_id', (req, res) => {
     const { member_id } = req.params;
     const { name, email, phone, address, membership_date } = req.body;

     const sql = "UPDATE member SET name = ? , email = ?, phone = ?, address = ?, membership_date = ? WHERE member_id = ?";
     connection.query(sql, [name, email, phone, address, membership_date, member_id], (err) => {

      if (err) {
        res.json({errorMessage: err.message});
      }else{
        res.json({message: "Member Updated Successfully"});
      }
     });
});

router.get('/:member_id', (req, res) => {

      const { member_id } = req.params;
      const sql = "SELECT * FROM member WHERE member_id = ?";
      connection.query(sql, [member_id], (err, data) => {
        if (err) {
            res.json({errorMessage: err.message});
        } else {
            res.json({member: data});
        }
      }) 
});

router.delete('/:member_id', (req, res) => {

      const { member_id } = req.params;
      const sql = "DELETE FROM member WHERE member_id = ?";
      connection.query(sql, [member_id], (err) => {
        if (err) {
            res.json({error: err.message});
        } else {
          res.json("Member Deleted successfully");
        }
      }) 
});




module.exports = router;