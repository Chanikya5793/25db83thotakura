var express = require('express');
const costume_controller = require('../controllers/costume');
var router = express.Router();

/* GET costumes */
router.get('/', costume_controller.costume_view_all_Page);

/* GET detail costume page */
router.get('/detail', costume_controller.costume_view_one_Page);

module.exports = router;
