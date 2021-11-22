import express from "express";
import cors from "cors";

import UserRoutes from "./app/routes/user.routes";
import AdminRoutes from "./app/routes/admin.routes";

import "./database/connection";
import { appendFile } from "fs";

const server = express();

const corsOptions = {
  origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
};

server.use(cors(corsOptions));


server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use(AdminRoutes);
server.use(UserRoutes);

server.listen(3333, () => console.log("Listening on port 3333..."));
