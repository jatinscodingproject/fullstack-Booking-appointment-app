const express = require('express');

const router = express.Router()

const userController = require('../controllers/user')

router.get('/appointments',userController.getUserfromPage)
router.post('/appointments',userController.addUserDetails)
router.get('/',userController.getallUserDetails)


module.exports = router;