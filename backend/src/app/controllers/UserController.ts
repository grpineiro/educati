import { Request, Response } from "express";
import UserEntity, { User } from "../entities/User";

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
    return res.send(user);
  }


  public getUsers(req: Request, res: Response) {
    UserEntity.find({}, (err, users) => {
      if (err)
        return res.status(400).json(err);

      res.json(users);
    });
  }

  public async getUser(req: Request, res: Response) {
    const { id } = req.params;

    UserEntity.findById(id, (err: Error, user: User) => {
      if (err)
        return res.status(400).json(err);

      res.json(user);
    });
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

    async function emailExists(email: string) {
      return await UserEntity.findOne({ email }).exec();
    }

    if (await emailExists(email)) {
      return res.status(503).json({ "message": "Email já existe" });
    }

    UserEntity.findByIdAndUpdate(id, {
      first_name,
      last_name,
      email,
      birth,
      password
    }, (err: any, user: any) => {
      if (err)
        return res.status(400).json(err);

      res.json(user);
    });
  }

  public async deleteUser(req: Request, res: Response) {
    const { id } = req.params;

    UserEntity.findByIdAndDelete(id).exec((err, user) => {
      if (err)
        return res.status(400).json(err);

      res.json({user, "message": "Usuario deletado"});
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

      if (user.password !== password)
        return res.status(400).json({ "message": "Senha incorreta" });

      res.json(user);
    });
  }
}
