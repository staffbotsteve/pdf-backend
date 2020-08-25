const express = require('express');
const licenseRoutes = require('./license.route');

const router = express.Router();

router.use('/api/licenses', licenseRoutes);

module.exports = router;
