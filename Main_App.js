const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
