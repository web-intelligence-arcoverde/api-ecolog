import { Router } from "express";
import userController from "../controllers/user";

const userRoutes = Router();
userRoutes.post("/create-account", userController.create);
userRoutes.get("/:id", userController.findById);
userRoutes.put("/:id", userController.updateUser);
userRoutes.delete("/:id", userController.deleteUser);
export default userRoutes;
