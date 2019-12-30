const express = require('express');
const EventController = require('../controllers/event');

const router = express.Router();

router.get('/', EventController.handleEvent);

module.exports = router;