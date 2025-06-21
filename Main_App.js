const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const Book_Configuration = require("./Book_Configuration");
const Author_Configuration = require("./Author_Configuration");

require("dotenv").config();

const app = express();
app.use(express.json());

app.use(cors({
    origin:'http://localhost:5173',
}));

app.use(bodyParser.urlencoded({extended: true}));

app.get('/homepage', (req, res) => {
      res.json("Welcome To Library managment system");
});

app.use('/Books_list', Book_Configuration);
app.use('/Add_New_Book', Book_Configuration); // add new book
app.use('/Update_Book', Book_Configuration);
app.use('/Delete_Book', Book_Configuration);
app.use('/Get_Sigle_Book', Book_Configuration);
app.use('/Add_Author', Author_Configuration);
app.use('/Author_List', Author_Configuration);
app.use('/Update_Author', Author_Configuration);
app.use('/Get_Single_Author', Author_Configuration);
app.use('/Delete_Author', Author_Configuration);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`http://localhost:${process.env.PORT}`);
})