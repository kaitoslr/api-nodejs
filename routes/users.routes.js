
import express from "express";
import usersController from '../controllers/users.controller.js';
import superUsers from '../controllers/users.controller.js';

const router = express.Router();

router.get('/superusers', superUsers.controllerSuperUsers);

router.post('/users', usersController.createUsers);

export default router;