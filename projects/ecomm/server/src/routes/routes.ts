import {Router} from'express'
import {loginUser, userSignUp}  from '../controllers/userControllers'
import {productCard} from '../controllers/productController'

export const userRouter = Router();

userRouter.post("/add-user",userSignUp )
userRouter.post("/login",loginUser )
userRouter.get("/products",productCard)

export default userRouter;