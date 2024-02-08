const express = require('express');

const router = express.Router()

const userController = require('../controllers/user')

//router.get('/appointments',userController.getUserfromPage);

router.get('/appointments/data',userController.getUserDetails);

router.post('/appointments',userController.postUserDetails);

router.get('/appointments/delete/:dId',userController.deleteUserDetails);

router.get('/appointments/edit/:eId',userController.editUserDetails);

module.exports = router;