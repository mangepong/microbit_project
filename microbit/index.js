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
const jsdom = require("jsdom");


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

router.get("/makeroom", async (req, res) => {
    let data = {
        title: "Microbit BBC | Project"
    };
    data.res = await micro.showAllData(10);
    res.render("makeroom", data);
});

router.get("/test", (req, res) => {
    let data = {
        title: "Microbit BBC | Project"
    };
    res.render("test.php", data);
});

router.get("/example", (req, res) => {
    let data = {
        title: "Microbit BBC | Project"
    };
    // const jsdom = require("jsdom");
    // const dom = new jsdom(`<p>Hello world</p>`);
    // data.res = dom.window.document.querySelector("p").textContent;
    res.render("example", data);
});
module.exports = router;
