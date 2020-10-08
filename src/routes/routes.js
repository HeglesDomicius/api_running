import UsersController from '../controllers/users';
import express from 'express';
//const controller = require('../../src/services/server');
const router = express.Router();
const usersController = new UsersController();

//router.get('/api/websites', controller.getWebsites);

//aqui precisa o .bind pq o getAll ta sendo passado como referencia
router.get('/api/users', usersController.getAll.bind(usersController));

//router.get('/api/suites', controller.getSuite);

module.exports = router;
