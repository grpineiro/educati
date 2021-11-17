import { Router } from "express";

const UserRoutes = () => {
  const routes = Router();

  routes.get("/list/users");
  routes.get("/list/users/:id");

  routes.post("/create/user");

  routes.put("/update/user/:id");

  routes.delete("/delete/user/:id");
}

export default UserRoutes;
