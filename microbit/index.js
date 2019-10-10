/**
 * Route for bank.
 */
"use strict";

const express = require("express");
const dom = require("express-dom");
const router  = express.Router();
const micro   = require("../src/functions.js");
const sc = require("../src/script.js");
var fs = require("fs");



router.get("/", async (req, res) => {
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

router.get("/makeroom.html", dom().load(), (req, res) => {
    let data = {
        title: "Microbit BBC | Project"
    };
    res.render("makeroom.html", data);
});




module.exports = router;
