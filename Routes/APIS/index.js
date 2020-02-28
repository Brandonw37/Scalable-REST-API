/*
* Imports different versions of APIs (V1, V2, etc.)
* Creates per page http://main/v1/v2...etc
*/

const express = require('express');
const v1APIController = require('./v1');

let router = express.Router();
router.use('/v1', v1APIController);
module.exports = router;