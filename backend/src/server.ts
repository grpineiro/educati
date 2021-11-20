import express from "express";

import connection from "./database/connection";
import UserRoutes from "./app/routes/user.routes";
import "./database/connection";
const server = express();

server.get("/", (req, res) => {
  res.json({ test: "Hello World" });
});

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use(UserRoutes);

server.listen(3000, () => console.log("Listening on port 3000..."));

