// Create a user controller with the following methods: getUser, getUsers, createUser, updateUser, deleteUser and loginUser

import { randomUUID } from "crypto";
import { Request, Response } from "express";
import mongoose, { QueryOptions } from "mongoose";
import UserEntity, { User } from "../entities/User";

export default class UserController {

  public create(req: Request, res: Response) {
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

    const user = new UserEntity({
      first_name,
      last_name,
      email,
      birth,
      password
    });

    user.save((err, user) => {
      if (err)
        res.sendStatus(400).json(err);

      res.json(user);
    });

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
    }, (err: Error, user: User) => {
      if (err)
        res.sendStatus(400).json(err);

      res.json(user);
    });
  }

  public async deleteUser(req: Request, res: Response) {
    const { id } = req.params;

    UserEntity.findByIdAndDelete(id, (err: Error, user: User) => {
      if (err)
        res.sendStatus(400).json(err);

      res.json(user);
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
