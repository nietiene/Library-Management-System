const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const Add_New_Book = require("./Add_Book");

require("dotenv").config();

const app = express();
app.use(express.json());

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/homepage', (req, res) => {
      res.json("Welcome To Library managment system");
});

app.use('/Add_New_Book', Add_New_Book);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`http://localhost:${process.env.PORT}`);
})