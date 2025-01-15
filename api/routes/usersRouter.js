const express = require("express");

const router = express.Router();

const usersController = require("../controllers/usersRouter");

router.get("/", usersController.getAllUsers);

router.post(["/create", "/new"], usersController.createUser);

router.get("/:index", usersController.getUser);

module.exports = router;