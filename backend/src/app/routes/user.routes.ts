import { Router } from "express";
import UserController from "../controllers/UserController";
import ValidationJWT from "../middlewares/auth";

const UserRoutes = () => {
  const userController = new UserController();
  const routes = Router();

  routes.get("/list/users", ValidationJWT, userController.getUsers);
  routes.get("/list/user/:id", ValidationJWT, userController.getUserById);
  routes.get("/list/user/", ValidationJWT, userController.getUserByEmail);

  routes.post("/create/user", userController.createUser);
  routes.post("/auth/user", userController.loginUser);

  routes.put("/update/user/:id", ValidationJWT, userController.updateUser);

  routes.delete("/delete/user/:id", ValidationJWT, userController.deleteUser);

  return routes;
}

export default UserRoutes();
