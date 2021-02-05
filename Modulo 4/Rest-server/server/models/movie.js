const mongoose = require("mongoose");

const uniqueValidator = require("mongoose-unique-validator")

const Schema = mongoose.Schema;

const validGenres = {
    values: ["COMEDY", "DRAMA"],
    message: "{VALUE} is not a valid genre"
};

const movieSchema = new Schema({

    title: {
        type: String,
        required: [true, "Title is required"],
        unique: true
    },
    description: {
        type: String,
        required: [true, "Description is required"]
    },
    genre: {
        type: String,
        enum: validGenres,
        required: [true, "Genre is required"]
    },
    year: {
        type: Number,
        required: [true, "Year is required"] 
    }
});

movieSchema.plugin(uniqueValidator, { message: "{PATH} should be unique" });

module.exports = mongoose.model("Movie", movieSchema);