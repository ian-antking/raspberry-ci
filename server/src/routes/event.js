const express = require('express');
const EventController = require('../controllers/event');
const auth = require('../middleware/auth');
const checkRepo = require('../middleware/check-repo');

const router = express.Router();

router.post('/',
    auth,
    checkRepo,
    EventController.handleEvent
);

module.exports = router;