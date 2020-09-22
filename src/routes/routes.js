const express = require('express')
const router = express.Router()
const controller = require('../controllers/controller')

router.get('/api/websites', controller.getWebsites)
router.get('/api/users', controller.getUsers)
router.get('/api/suites', controller.getSuite)

module.exports = router
