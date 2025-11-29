import express from 'express'
import userController from '../Controllers/userController.js';

const { createUser, userLogin } = userController;

const router=express.Router();

router.post('/create',createUser)
router.post('/login',userLogin)

export default router