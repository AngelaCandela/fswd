require("./config/config");

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Global routes config
app.use(require("./routes/index"));


// Mongoose connection
mongoose.connect("mongodb://localhost:27017/rest-server-users", {
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

app.listen(process.env.PORT, () => {
    console.log("Listening on port: ", 3000);
});