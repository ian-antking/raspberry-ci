const express = require('express');
const EventController = require('../controllers/event');

const router = express.Router();

router.post('/', EventController.handleEvent);

module.exports = router;