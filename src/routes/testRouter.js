const express = require("express");
const testRoute = express.Router();

const testController = require("../controllers/testController.js");

testRoute.post("/tasks", testController.addTask);
testRoute.get("/gettasks", testController.getAllTask);
testRoute.get("/getSingletasks/:id", testController.getSingleTask);
testRoute.post("/update", testController.updateTask);
testRoute.post("/delete/:id", testController.deleteTask);

module.exports = testRoute;
