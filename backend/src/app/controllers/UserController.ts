import { Request, Response } from "express";
import UserEntity, { User } from "../entities/User";

export default class UserController {

  public async createUser(req: Request, res: Response) {
    const { first_name, last_name, email, birth, password } = req.body;

    const msgObg = { "message": "Campo Obrigatorio" };

    if (!first_name)
      res.sendStatus(422).json(msgObg);

    if (!last_name)
      res.sendStatus(422).json(msgObg);

    if (!email)
      res.sendStatus(422).json(msgObg);

    if (!birth)
      res.sendStatus(422).json(msgObg);

    if (!password)
      res.sendStatus(422).json(msgObg);

    async function userExists(email: string) {
      return await UserEntity.findOne({ email }).exec();
    }

    if (await userExists(email)) {
      return res.sendStatus(503).json({ "message": "Usuário já existe" });
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
        res.sendStatus(400).json(err);

      res.json(users);
    });
  }

  public async getUser(req: Request, res: Response) {
    const { id } = req.params;

    UserEntity.findById(id, (err: Error, user: User) => {
      if (err)
        res.sendStatus(400).json(err);

      res.json(user);
    });
  }
  
  public async updateUser(req: Request, res: Response) {
    const { id } = req.params;
    const { first_name, last_name, email, birth, password } = req.body;
    
    const msgObg = { "message": "Campo Obrigatorio" };

    if (!first_name)
      res.sendStatus(422).json(msgObg);

    if (!last_name)
      res.sendStatus(422).json(msgObg);

    if (!email)
      res.sendStatus(422).json(msgObg);

    if (!birth)
      res.sendStatus(422).json(msgObg);

    if (!password)
      res.sendStatus(422).json(msgObg);

    UserEntity.findByIdAndUpdate(id, {
      first_name,
      last_name,
      email,
      birth,
      password
    }, (err: any, user: any) => {
      if (err)
        res.sendStatus(400).json(err);

      res.json(user);
    });
  }

  public async deleteUser(req: Request, res: Response) {
    const { id } = req.params;

    UserEntity.findByIdAndDelete(id).exec((err, user) => {
      if (err)
        res.sendStatus(400).json(err);

      res.json({user, "message": "Usuario deletado"});
    });
  }

  public async loginUser(req: Request, res: Response) {
    const { email, password } = req.body;

    if (!email)
      res.sendStatus(422).json({ "message": "Campo Obrigatorio" });

    if (!password)
      res.sendStatus(422).json({ "message": "Campo Obrigatorio" });

    UserEntity.findOne({ email }, (err: Error, user: User) => {
      if (err)
        res.sendStatus(400).json(err);

      if (!user)
        res.sendStatus(400).json({ "message": "Usuário não encontrado" });

      if (user.password !== password)
        res.sendStatus(400).json({ "message": "Senha incorreta" });

      res.json(user);
    });
  }
}
