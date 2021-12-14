const express = require('express');
const { getAllCity } = require('../controllers/cityController');

const router = express.Router();

router.route('/').get(getAllCity);

module.exports = router;
