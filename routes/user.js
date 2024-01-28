const express = require('express');

const router = express.Router()

const userController = require('../controllers/user')

router.get('/appointments',userController.getUserfromPage)
router.post('/appointments',userController.addUserDetails)
router.get('/appointments/data',userController.getallUserDetails)


module.exports = router;