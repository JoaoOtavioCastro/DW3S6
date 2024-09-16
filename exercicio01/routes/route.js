const express = require("express");
const routerApp = express.Router();
const appCalc = require("../controller/ctCalc");


routerApp.post("/calculadora", appCalc.fCalculo);

module.exports = routerApp;
