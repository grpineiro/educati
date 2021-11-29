import { Router } from "express";
import AdminController from "../controllers/AdminController";
import ValidationJWT from "../middlewares/auth";

const AdminRoutes = () => {
  const admins = new AdminController();
  const routes = Router();

  routes.post("/login/admin", admins.loginAdmin);

  routes.get("/list/admins", ValidationJWT, admins.getAdmins);
  routes.get("/list/admin/:id", ValidationJWT, admins.getAdmin);

  routes.post("/create/admin", admins.createAdmin);

  routes.put("/update/admin/:id", ValidationJWT, admins.updateAdmin);

  routes.delete("/delete/admin/:id", ValidationJWT, admins.deleteAdmin);

  return routes;
}

export default AdminRoutes();
