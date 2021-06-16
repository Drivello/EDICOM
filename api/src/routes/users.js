const router = require('express').Router();
const express = require('express');

const allUsers = require('../controllers/users/allUsersController');
const createUser = require('../controllers/users/createUserController');
//const deleteUser = require('../controllers/users/deleteUserController');
const getUserById = require('../controllers/users/getUserByIdController');
const updateUser = require('../controllers/users/updateUserController');

router.use(express.json());

router.get('/all/:id', allUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.put('/:id', updateUser);
//router.delete('/delete/:id', deleteUser);

module.exports = router;
