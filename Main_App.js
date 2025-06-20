const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/homepage', (req, res) => {
      res.json("Welcome To Library managment system");
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`http://localhost:${process.env.PORT}`);
})