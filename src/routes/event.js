const express = require('express');
const EventController = require('../controllers/event');
const auth = require('../middleware/auth');
const repoExtractor = require('../middleware/repo-extractor');

const router = express.Router();

router.post('/', auth, repoExtractor, EventController.handleEvent);

module.exports = router;