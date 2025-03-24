// JS FR
const express = require("express");
// JS
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
module.exports = app;