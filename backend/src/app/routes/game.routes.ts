import { Router } from "express";
import GameController from "../controllers/GameController";
import ValidationJWT from "../middlewares/auth";

const GameRouter = () => {
  const games = new GameController();
  const routes = Router();

  routes.post("/create/game", ValidationJWT, games.create);

  routes.put("/update/game/:id", ValidationJWT, games.update);

  routes.get("/list/games", games.readAll);
  routes.get("/list/game/:id", ValidationJWT, games.read);

  routes.delete("/delete/game/:id", ValidationJWT, games.delete);

  return routes;
}

export default GameRouter();
