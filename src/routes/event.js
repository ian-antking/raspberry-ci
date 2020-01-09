const express = require('express');
const EventController = require('../controllers/event');
const auth = require('../middleware/auth');
const checkRepo = require('../middleware/check-repo');
const resetRepo = require('../middleware/reset-repo');

const router = express.Router();

router.post('/',
    auth,
    checkRepo,
    resetRepo,
    EventController.handleEvent
);

module.exports = router;