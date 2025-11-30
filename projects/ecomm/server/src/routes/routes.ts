import {Router} from'express'
import {userSignUp}  from '../controllers/userControllers'

export const userRouter = Router();

userRouter.post("/add-user",userSignUp )

export default userRouter;