const express = require("express"); 
const cors = require("cors"); 
const mongoose = require("mongoose"); 
const bodyParser = require("body-parser");
const usersRouter = require("./routes/users"); 
const stocksRouter = require("./routes/stocks"); 
const mainRouter = require("./routes/main");

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
// app.use(session({
//     secret: process.env.SECRET,
//     resave: false,
//     saveUninitialized: false
// }));

app.use('/users', usersRouter);
app.use('/stocks', stocksRouter);
app.use('', mainRouter);

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true , useUnifiedTopology: true})
.catch(err => console.log('Error occured during connecting to database'));

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});