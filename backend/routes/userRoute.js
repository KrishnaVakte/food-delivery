import express from 'express'
import { loginUser,registerUser, verifyEmail } from '../controllers/userController.js'

const userRouter = express.Router()

userRouter.post('/register', registerUser)
userRouter.post('/login',loginUser)
userRouter.get("/:id/verify/:token", verifyEmail)

export default userRouter;