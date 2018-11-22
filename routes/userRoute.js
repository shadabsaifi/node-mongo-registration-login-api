const express = require('express');
const userRoute = express.Router();
const userService = require('../users/users.controller');

// routes
userRoute.post('/authenticate', userService.authenticate);
userRoute.post('/register', userService.register);
userRoute.get('/', userService.getAll);
userRoute.get('/current', userService.getCurrent);
userRoute.get('/:id', userService.getById);
userRoute.put('/:id', userService.update);
userRoute.delete('/:id', userService._delete);

module.exports = userRoute;