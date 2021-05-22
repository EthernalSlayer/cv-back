const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/users.controller');
const usersPostValidator = require('../utils/validator/usersPostValidator');
const usersPutValidator = require('../utils/validator/usersPutValidator');

router
	.get('/', UsersController.getUsers)
	.post('/', usersPostValidator, UsersController.postUser)
	.delete('/:id', UsersController.deleteUser)
	.put('/:id', usersPutValidator, UsersController.updateUser)
	.post('/login', UsersController.login);

module.exports = router;
