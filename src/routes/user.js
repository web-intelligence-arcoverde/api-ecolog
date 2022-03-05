import { Router } from "express";
import userService from "../controllers/user";

const userRoutes = Router();
userRoutes.post("/create-account", userService.create);
userRoutes.get("/:id", userService.findById);

export default userRoutes;
