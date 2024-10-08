const express = require("express");
const routerApp = express.Router();
const appHello = require("../controller/ctHello");

routerApp.get("/", appHello.hello);
routerApp.post("/helloUser", appHello.helloUser);

module.exports = routerApp;
