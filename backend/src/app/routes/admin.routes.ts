import { Router } from "express";

const AdminRoutes = () => {
  const routes = Router();

  routes.get("/list/admin")
  routes.get("/list/admin/:id");

  routes.post("/create/admin");

  routes.put("/update/admin/:id");

  routes.delete("/delete/admin/:id");

  return routes;
}

export default AdminRoutes();
