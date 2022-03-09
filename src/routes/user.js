import { Router } from "express";
import userService from "../controllers/user";

const userRoutes = Router();
userRoutes.post("/create-account", userService.create);
userRoutes.get("/:id", userService.findById);
userRoutes.put("/:id", userService.updateUser);

export default userRoutes;
