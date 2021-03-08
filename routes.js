let express = require('express');
let router = express.Router();

var bodyParser = require('body-parser');
const { request } = require('express');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());





module.exports = router;