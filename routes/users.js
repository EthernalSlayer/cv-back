const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/users.controller');
const usersPostValidator = require('../utils/validator/usersPostValidator');
const usersPutValidator = require('../utils/validator/usersPutValidator');
const loginValidator = require('../utils/validator/loginValidator');

router
	.get('/', UsersController.getUsers)
	.post('/', usersPostValidator, UsersController.postUser)
	.delete('/:id', UsersController.deleteUser)
	.put('/:id', usersPutValidator, UsersController.updateUser)
	.post('/login', loginValidator, UsersController.login);

module.exports = router;
