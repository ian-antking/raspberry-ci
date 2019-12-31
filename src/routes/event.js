const express = require('express');
const EventController = require('../controllers/event');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/', auth, EventController.handleEvent);

module.exports = router;