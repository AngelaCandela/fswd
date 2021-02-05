const express = require("express");
const router = express.Router();

const Movie = require("../models/movie");

router.get("/", (req, res) => {
    res.json("GET movie");
});

router.post("/", (req, res) => {
    const body = req.body;

    const movie = new Movie({
        title: body.title,
        description: body.description,
        genre: body.genre,
        year: body.year,
    });

    movie.save((error, movieDB) => {
        if (error !== null) {
            res.status(400).json({
                ok: false,
                error: error,
            });
        } else {
            res.json({
                ok: true,
                movie: movieDB
            });
        };
    });    
});

router.put("/:title", (req, res) => {
    const title = req.params.title;
    res.json({
        title : title
    });
});

router.delete("/", (req, res) => {
    res.json("DELETE movie");
});

module.exports = router;