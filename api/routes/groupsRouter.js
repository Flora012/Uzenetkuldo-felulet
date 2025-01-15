const express = require("express");

const router = express.Router();

const groupsController = require("../controllers/groupsController");

router.get("/", groupsController.getAllGroups);

router.post(["/create", "/new"], groupsControllerr.createGroup);

router.get("/:index", groupsController.getGroup);

module.exports = router;