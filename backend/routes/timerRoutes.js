const express = require('express');
const { startTimer, getTimer } = require('../controllers/timerController');
const router = express.Router();

router.post('/', startTimer);
router.get('/', getTimer);

module.exports = router;
