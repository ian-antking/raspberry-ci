const express = require('express');
const EventController = require('../controllers/event');
const auth = require('../middleware/auth');
const extractRepo = require('../middleware/extract-repo');
const resetRepo = require('../middleware/reset-repo');

const router = express.Router();

router.post('/',
    auth,
    extractRepo,
    resetRepo,
    EventController.handleEvent
);

module.exports = router;