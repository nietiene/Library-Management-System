const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const session = require("express-session");
const Book_Configuration = require("./Book_Configuration");
const Author_Configuration = require("./Author_Configuration");
const Member_Configuration = require('./Member_Configuration');
const Login = require("./login");
const logout = require("./logout");

require("dotenv").config();

const app = express();
app.use(express.json());

app.use(session({
    secret: 'myScretKey',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }

}))
app.use(cors({
    origin:'http://localhost:5173',
    credentials: true
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
app.use('/books', Book_Configuration); // available books
app.use('/books', Book_Configuration) // search book
app.use('/Add_Author', Author_Configuration);
app.use('/Author_List', Author_Configuration);
app.use('/Update_Author', Author_Configuration);
app.use('/Get_Single_Author', Author_Configuration);
app.use('/Delete_Author', Author_Configuration);
app.use('/Add_Member', Member_Configuration);
app.use('/Member_List', Member_Configuration);
app.use('/Update_Member', Member_Configuration);
app.use('/Get_Single_Member', Member_Configuration);
app.use('/Delete_Member', Member_Configuration);
app.use("/auth", Login);
app.use("/data", Login);
app.use("/auth", logout);
app.use("/member", Member_Configuration);
app.use("/member/data", Member_Configuration);


const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`http://localhost:${process.env.PORT}`);
})