import { Router } from "express";
import AdminController from "../controllers/AdminController";

const AdminRoutes = () => {
  const admins = new AdminController();
  const routes = Router();

  routes.get("/list/admin", admins.getAdmins);
  routes.get("/list/admin/:id", admins.getAdmin);

  routes.post("/create/admin", admins.createAdmin);

  routes.put("/update/admin/:id", admins.updateAdmin);

  routes.delete("/delete/admin/:id", admins.deleteAdmin);

  return routes;
}

export default AdminRoutes();
