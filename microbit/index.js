/**
 * Route for bank.
 */
"use strict";

const express = require("express");
const router  = express.Router();
const micro   = require("../src/functions.js");


router.get("/", (req, res) => {
    let data = {
        title: "Microbit BBC | Project"
    };

    res.render("index", data);
});

router.get("/index", (req, res) => {
    let data = {
        title: "Microbit BBC | Project"
    };

    res.render("index", data);
});

router.get("/input", async (req, res) => {
    let data = {
        title: "Microbit BBC | Project"
    };
    res.render("input", data);
});

router.get("/stats", async (req, res) => {
    let data = {
        title: "Microbit BBC | Project"
    };

    const limit = parseInt(req.query.limit);
    data.res = await micro.showAllData(limit);
    res.render("stats", data);
});

router.get("/makeroom", async (req, res) => {
    let data = {
        title: "Microbit BBC | Project"
    };
    res.render("makeroom", data);
});

router.get("/room", (req, res) => {
    let data = {
        title: "Microbit BBC | Project"
    };

    const x = req.query.x;
    const y = req.query.y
    micro.createRoom(x, y);
    res.render("room", data);
});

module.exports = router;
