
const express = require('express');
const router = express.Router();
const friendshipController = require('../controllers/friendshipController');

router.get('/', friendshipController.getAllFriendships);
router.post('/', friendshipController.createFriendship);

module.exports = router;
