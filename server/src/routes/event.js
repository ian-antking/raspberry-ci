const express = require('express');
const EventController = require('../controllers/event');
const auth = require('../middleware/auth');
const checkRepo = require('../middleware/check-repo');
const resetRepo = require('../middleware/reset-repo');
const cleanRepo = require('../middleware/clean-repo');

const router = express.Router();

router.post('/',
    auth,
    checkRepo,
    EventController.handleEvent
);

module.exports = router;