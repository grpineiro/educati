import { Request, Response } from "express";
import UserEntity, { User } from "../entities/User";
import jwtService, { JsonWebTokenError } from "jsonwebtoken";
import { generateToken } from "../middlewares/auth";

export default class UserController {

  public async createUser(req: Request, res: Response) {
    const { first_name, last_name, email, birth, password } = req.body;

    const msgObg = { "message": "Campo Obrigatorio" };

    if (!first_name)
      return res.status(422).json(msgObg);

    if (!last_name)
      return res.status(422).json(msgObg);

    if (!email)
      return res.status(422).json(msgObg);

    if (!birth)
      return res.status(422).json(msgObg);

    if (!password || password.length === "")
      return res.status(400).json(msgObg);

    async function userExists(email: string) {
      return await UserEntity.findOne({ email }).exec();
    }

    if (await userExists(email)) {
      return res.status(503).json({ "message": "Usuário já existe" });
    }

    const user = new UserEntity({
      first_name,
      last_name,
      email,
      birth,
      password
    });

    await user.save();
    return res.send({
      user,
      token: generateToken({ id: user.id })
    });
  }


  public getUsers(req: Request, res: Response) {
    UserEntity.find({}, (err, users) => {
      if (err)
        return res.status(400).json(err);

      return res.json(users);
    });
  }

  public async getUserById(req: Request, res: Response) {
    const { id } = req.params;

    UserEntity.findById(id, (err: Error, user: User) => {
      if (err)
        return res.status(400).json(err);

      return res.json(user);
    });
  }
  public async getUserByEmail(req: Request, res: Response) {
    const email: any = req.query.email;

    UserEntity.findOne({ email }, (err: Error, user: User) => {
      if (err)
        return res.status(400).json(err);

      if (!user)
        return res.status(400).json({ "message": "Usuário não encontrado" });

      return res.json(user);
    })
  }

  public async updateUser(req: Request, res: Response) {
    const { id } = req.params;
    const { first_name, last_name, email, birth, password } = req.body;

    const msgObg = { "message": "Campo Obrigatorio" };

    if (!first_name)
      return res.status(422).json(msgObg);

    if (!last_name)
      return res.status(422).json(msgObg);

    if (!email)
      return res.status(422).json(msgObg);

    if (!birth)
      return res.status(422).json(msgObg);

    if (!password)
      return res.status(422).json(msgObg);

    UserEntity.findByIdAndUpdate(id, {
      first_name,
      last_name,
      email,
      birth,
      password
    }, (err: any, user: any) => {
      if (err)
        return res.status(400).json(err);

      if (!user)
        return res.status(400).send({ message: "usuario não existe." })

      return res.status(200).send({ message: "Ok" });
    });
  }

  public updateGameStars(req: Request, res: Response) {
    const { id } = req.params;
    const { stars } = req.body;

    UserEntity.findByIdAndUpdate(id, { stars }, (err: any, user: any) => {
      if (err)
        return res.status(400).json(err);
      
      if (!user)
        return res.status(400).send({ message: "usuario não existe." });

      return res.status(200);
    });
  }

  public async deleteUser(req: Request, res: Response) {
    const { id } = req.params;

    UserEntity.findByIdAndDelete(id).exec((err, user) => {
      if (err)
        return res.status(400).json(err);

      return res.status(200).send({ user, "message": "Usuário deletado" });
    });
  }

  public async loginUser(req: Request, res: Response) {
    const { email, password } = req.body;

    if (!email)
      return res.status(422).json({ "message": "Campo Obrigatorio" });

    if (!password)
      return res.status(422).json({ "message": "Campo Obrigatorio" });

    UserEntity.findOne({ email }, (err: Error, user: User) => {
      if (err)
        return res.status(400).json(err);

      if (!user)
        return res.status(400).json({ "message": "Usuário não encontrado" });

      user.comparePassword(password, (err: Error, isMatch: boolean) => {
        if (err) {
          throw err;
        } else if (!isMatch) {
          return res.status(400).send({ "message": "Senha incorreta." })
        } else {
          return res.send({
            user,
            token: generateToken({ id: user.id })
          })
        }

      });


    });
  }
}
