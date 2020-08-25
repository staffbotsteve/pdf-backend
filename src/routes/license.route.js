const express = require('express');
const controller = require('../controllers/license.controller');

const router = express.Router();

router.route('/search').post(controller.search);
router.route('/types').get(controller.getLicenseTypes);
router.route('/states').get(controller.getStates);

module.exports = router;
