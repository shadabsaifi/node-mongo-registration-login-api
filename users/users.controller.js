var userService = require('../users/user.service');
var code = require('../common/status');
var message = require('../common/message');
var { response } = require('../common/response');

function authenticate(req, res, next) {
    userService.authenticate(req.body)
        .then(user => user ? response(res, code.EVERY_THING_IS_OK, message.SUCCESSFULLY_LOGIN, user) : response(res, code.NOT_FOUND,  message.INVALID_CREDENTIALS))
        .catch(err => next(err));
}

function register(req, res, next) {
    userService.create(req.body)
        .then(() => res.status(200).json({ status:200, message: 'You have successfully singup' }))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    userService.getAll()
        .then(users => res.json(users))
        .catch(err => next(err));
}

function getCurrent(req, res, next) {
    userService.getById(req.user.sub)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}

function getById(req, res, next) {
    userService.getById(req.params.id)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}

function update(req, res, next) {
    userService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    userService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}


module.exports = {
    authenticate,
    register,
    getAll,
    getCurrent,
    getById,
    update,
    _delete
}