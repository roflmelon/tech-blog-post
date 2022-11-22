const router = require('express').Router();

const homeRoutes = require('./homepage.js');

router.use('/', homeRoutes);

module.exports = router;
