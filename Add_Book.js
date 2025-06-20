const express = require("express");
const connection = require("./Conn");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/')