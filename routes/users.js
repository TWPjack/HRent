var express = require('express');
var router = express.Router();
const UserController = require('../controllers/UserController');

router.post('/create', UserController.CreateUser);

router.put('/update', UserController.UpdateUser);

router.get('/get', UserController.GetUser);

router.delete('/del', UserController.DeleteUser);

module.exports = router;
