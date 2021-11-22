import express from "express";

import UserRoutes from "./app/routes/user.routes";
import AdminRoutes from "./app/routes/admin.routes";

import "./database/connection";

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use(AdminRoutes);
server.use(UserRoutes);

server.listen(3000, () => console.log("Listening on port 3000..."));
