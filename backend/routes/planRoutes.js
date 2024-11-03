const express = require('express');
const router = express.Router();
const planController = require('../controllers/planController');
const auth = require('../middleware/auth');

router.get('/', auth, planController.getPlan);

module.exports = router;
