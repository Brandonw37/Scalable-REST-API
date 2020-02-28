/**
 * Routes APIS from Controller file
 */

const userController = require('../../controllers/APIS/users');

const express = require('express');
let router = express.Router();
router.use('/Users',userController);
module.exports = router;