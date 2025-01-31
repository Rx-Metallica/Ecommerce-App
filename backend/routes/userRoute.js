import express from 'express';
import {createToken, loginUser, registerUser , adminLogin } from '../controllers/userController.js';
const userRouter = express.Router();

userRouter.post('/register',registerUser);
userRouter.post('/login',loginUser);
userRouter.post('/adminlogin',adminLogin);

export default userRouter;