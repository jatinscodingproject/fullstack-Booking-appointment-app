const express = require('express');

const router = express.Router()

const userController = require('../controllers/user')

router.get('/appointments',userController.getUserfromPage)
router.post('/appointments',userController.addUserDetails)
router.get('/appointments/data',userController.getalluserDetails)
router.get('/appointments/delete/:dId',userController.deleteuserDetails)
router.get('/appointments/edit/:eId',userController.edituserDetails)

module.exports = router;