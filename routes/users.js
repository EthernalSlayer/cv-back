const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/users.controller');

router
	.get('/', UsersController.getUsers)
	.post('/', UsersController.postUser)
	.delete('/:id', UsersController.deleteUser)
	.put('/:id', UsersController.updateUser);

module.exports = router;
