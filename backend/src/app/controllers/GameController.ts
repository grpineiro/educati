import { Request, Response } from "express";
import GameEntity, { Game } from "../entities/Game";

export default class GameController {

  public async create(req: Request, res: Response) {
    const { name, type, description } = req.body;

    const msgObg = "Campo Obrigatorio!";

    if (!name)
      return res.status(400).send({ message: msgObg });

    if (!type)
      return res.status(400).send({ message: msgObg });

    if (!description)
      return res.status(400).send({ message: msgObg });

    const checkExist = await GameEntity.findOne({ name }).exec();

    if (checkExist)
      return res.status(422).send({ message: "Esse jogo já está cadastrado." });

    const game = new GameEntity({ name, type, description });

    await game.save();
    return res.send({ game });
  }

  public read(req: Request, res: Response) {
    const { id } = req.params;

    GameEntity.findById(id).exec((err, game) => {
      if (err)
        return res.status(400).send({ message: err });

      if (!game)
        return res.status(404).send({ message: "Jogo não encontrado." });

      return res.send({ game });
    });
  }

  public readAll(req: Request, res: Response) {
    GameEntity.find().exec((err, games) => {
      if (err)
        return res.status(400).send({ message: err });

      if (!games)
        return res.status(404).send({ message: "Nenhum jogo encontrado." });

      return res.send({ games });
    });
  }

  public update(req: Request, res: Response) {
    const { id } = req.params;
    const { name, type, description } = req.body;

    const msgObg = "Campo Obrigatorio!";

    if (!name)
      return res.status(400).send({ message: msgObg });

    if (!type)
      return res.status(400).send({ message: msgObg });

    if (!description)
      return res.status(400).send({ message: msgObg });

    GameEntity.findByIdAndUpdate(id, {
      name,
      type,
      description
    }, (err: any, game: any) => {
      if (err)
        return res.status(400).json(err);

      if (!game)
        return res.status(400).send({ message: "Game não existe." })

      return res.status(200).send({ "message": "Ok" });
    });

  }

  public delete(req: Request, res: Response) {
    const { id } = req.params;
    GameEntity.findByIdAndDelete(id, (err, game) => {
      if (err)
        return res.status(400).send({ message: err })

      return res.status(200).send({ game, message: "Usuario deletado." });
    });
  }
}
