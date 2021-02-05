const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const users = require("./routes/users");
const movies = require("./routes/movies");

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use("/user", users);
app.use("/movie", movies);

// Mongoose connection
mongoose.connect("mongodb://localhost:27017/moviesss", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
});

const db = mongoose.connection;

db.on("error", () => {
    console.log("Connection to DB error", error);
});

db.once("open", () => {
    console.log("Connection to DB successful");
});

app.listen(3000, () => {
    console.log("Listening on port: ", 3000);
});