import {Router} from'express'
import {loginUser, userSignUp}  from '../controllers/userControllers'

export const userRouter = Router();

userRouter.post("/add-user",userSignUp )
userRouter.post("/login",loginUser )

export default userRouter;