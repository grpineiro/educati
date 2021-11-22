import { Request, Response } from "express";
import AdminEntity, { Admin } from "../entities/Admin";

export default class AdminController {

  public async createAdmin(req: Request, res: Response) {
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

    async function AdminExists(email: string) {
      return await AdminEntity.findOne({ email }).exec();
    }

    if (await AdminExists(email)) {
      return res.sendStatus(503).json({ "message": "Usuário já existe" });
    }

    const Admin = new AdminEntity({
      first_name,
      last_name,
      email,
      birth,
      password
    });

    await Admin.save();
    return res.send(Admin);
  }


  public getAdmins(req: Request, res: Response) {
    AdminEntity.find({}, (err, admins) => {
      if (err)
        res.sendStatus(400).json(err);

      res.json(admins);
    });
  }

  public async getAdmin(req: Request, res: Response) {
    const { id } = req.params;

    AdminEntity.findById(id, (err: Error, admin: Admin) => {
      if (err)
        res.sendStatus(400).json(err);

      res.json(admin);
    });
  }
  
  public async updateAdmin(req: Request, res: Response) {
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

    AdminEntity.findByIdAndUpdate(id, {
      first_name,
      last_name,
      email,
      birth,
      password
    }, (err: any, admin: any) => {
      if (err)
        res.sendStatus(400).json(err);

      res.json(admin);
    });
  }

  public async deleteAdmin(req: Request, res: Response) {
    const { id } = req.params;

    AdminEntity.findByIdAndDelete(id).exec((err, admin) => {
      if (err)
        res.sendStatus(400).json(err);

      res.json({admin, "message": "Usuario deletado"});
    });
  }

  public async loginAdmin(req: Request, res: Response) {
    const { email, password } = req.body;

    if (!email)
      res.sendStatus(422).json({ "message": "Campo Obrigatorio" });

    if (!password)
      res.sendStatus(422).json({ "message": "Campo Obrigatorio" });

    AdminEntity.findOne({ email }, (err: Error, admin: Admin) => {
      if (err)
        res.sendStatus(400).json(err);

      if (!admin)
        res.sendStatus(400).json({ "message": "Usuário não encontrado" });

      if (admin.password !== password)
        res.sendStatus(400).json({ "message": "Senha incorreta" });

      res.json(admin);
    });
  }
}
