const express = require('express');
const router = express.Router();
const availcontroller = require('../controllers/availcontroller');

router.get('/data', availcontroller.getData);
router.post('/data', availcontroller.addData);

module.exports = router;