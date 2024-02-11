import  express, {Router } from "express";
import {login,clientRegister} from "../Controller/userController.js";


const userRoute=express.Router()

userRoute.post('/register',clientRegister)


export default userRoute;