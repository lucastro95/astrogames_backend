import { Router } from "express";
import { signIn, signUp } from "../controllers/auth.controllers.js";

const router = Router()

router.put("/signin", signIn)
router.post("/signup", signUp)

export default router