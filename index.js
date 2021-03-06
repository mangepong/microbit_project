"use strict";


const port = 1337;

const express = require("express");
const routeIndex = require("./microbit/index.js");
const jsdom = require("jsdom");
const path = require("path");
const app = express();

app.set("view engine", "ejs");

app.use((req, res, next) => {
    console.info(`Got request on ${req.path} (${req.method})`);
    next();
});

app.use(express.static(path.join(__dirname, "views")));
app.use("/", routeIndex);

app.listen(port, () => {
    console.info(`Server is listening on port ${port}.`);
});
