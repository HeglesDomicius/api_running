import UsersController from '../controllers/users';
import express from 'express';
//const controller = require('../../src/services/server');

const router = express.Router();
//const controller = require('../../src/services/server');
const usersController = new UsersController();

router.get('/api/websites', controller.getWebsites);
router.get('/api/users', usersController.getAll.bind(UsersController));
router.get('/api/suites', controller.getSuite);

module.exports = router;
