const express = require("express");

const router = express.Router();

const groupMembersController = require("../controllers/groupMembersController");

router.get("/", groupMembersController.getAllGroupMembers);

router.post(["/create", "/new"], groupMembersController.createGroupMember);

router.get("/:index", groupMembersController.getGroupMembers);

module.exports = router;