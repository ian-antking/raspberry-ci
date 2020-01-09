const express = require('express');
const EventController = require('../controllers/event');
const auth = require('../middleware/auth');
const extractRepo = require('../middleware/extract-repo');

const router = express.Router();

router.post('/', auth, extractRepo, EventController.handleEvent);

module.exports = router;