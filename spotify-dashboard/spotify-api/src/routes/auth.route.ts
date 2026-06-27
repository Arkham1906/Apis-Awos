import { Router } from "express";
import { loginController, callbackController } from "../controllers/auth.controller";

const router = Router();

router.get("/login", loginController);
router.get("/callback", callbackController);

export default router;