const express = require('express');
const router = express.Router();
const appRoot = require('app-root-path');
const controller_generate_language_pack = require(appRoot + '/controllers/api/generate_language_pack');

/* GET home page. */
router.get('/', controller_generate_language_pack.company_add_user);

module.exports = router;
