var express = require('express');
const costume_controller = require('../controllers/costume');
var router = express.Router();

/* GET costumes */
router.get('/', costume_controller.costume_view_all_Page);

module.exports = router;
