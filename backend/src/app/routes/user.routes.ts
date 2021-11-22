import { Router } from "express";
import UserController from "../controllers/UserController";

const UserRoutes = () => {
  const userController = new UserController();
  const routes = Router();

  routes.get("/list/users", userController.getUsers);
  routes.get("/list/user/:id", userController.getUserById);
  routes.get("/list/user/", userController.getUserByEmail);

  routes.post("/create/user", userController.createUser);

  routes.put("/update/user/:id", userController.updateUser);

  routes.delete("/delete/user/:id", userController.deleteUser);

  return routes;
}

export default UserRoutes();
