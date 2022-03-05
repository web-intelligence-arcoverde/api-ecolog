import { Router } from "express";

const authRouter = Router();

authRouter.post("/", () => console.log("auth route"));

export default authRouter;
