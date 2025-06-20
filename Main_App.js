const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const Book_Configuration = require("./Book_Configuration");

require("dotenv").config();

const app = express();
app.use(express.json());

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/homepage', (req, res) => {
      res.json("Welcome To Library managment system");
});

app.use('/Add_New_Book', Book_Configuration);
app.use('/Update_Book/Update_Book/:book_id', Book_Configuration);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`http://localhost:${process.env.PORT}`);
})