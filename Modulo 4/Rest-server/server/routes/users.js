const express = require("express");
const router = express.Router();

const User = require("../models/user");

router.get("/", (req, res) => {
    res.json("GET local user");
});

router.post("/", (req, res) => {
    const body = req.body;

    const user = new User({
        username: body.username,
        email: body.email,
        password: body.password,
        role: body.role,
    });

    user.save((error, userDB) => {
        if (error !== null) {
            res.status(400).json({
                ok: false,
                error: error,
            });
        } else {
            res.json({
                ok: true,
                user: userDB
            });
        };
    });    
});

router.put("/:id", (req, res) => {
    const id = req.params.id;
    res.json({
        id: id
    });
});

router.delete("/", (req, res) => {
    res.json("DELETE user");
});

module.exports = router;