import { Request, Response } from "express";
import AdminEntity, { Admin } from "../entities/Admin";
import { generateToken } from "../middlewares/auth";

export default class AdminController {

  public async createAdmin(req: Request, res: Response) {
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

    async function AdminExists(email: string) {
      return await AdminEntity.findOne({ email }).exec();
    }

    if (await AdminExists(email)) {
      return res.status(503).json({ "message": "Usuário já existe" });
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
        return res.status(400).json(err);

      res.json(admins);
    });
  }

  public async getAdmin(req: Request, res: Response) {
    const { id } = req.params;

    AdminEntity.findById(id, (err: Error, admin: Admin) => {
      if (err)
        return res.status(400).json(err);

      res.json(admin);
    });
  }

  public async updateAdmin(req: Request, res: Response) {
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

    AdminEntity.findByIdAndUpdate(id, {
      first_name,
      last_name,
      email,
      birth,
      password
    }, (err: any, admin: any) => {
      if (err)
        return res.status(400).json(err);

      if (!admin)
        return res.status(422).send({ message: "Admin não existente" });

      return res.json({ "message": "Ok" });
    });
  }

  public deleteAdmin(req: Request, res: Response) {
    const { id } = req.params;

    AdminEntity.findByIdAndDelete(id).exec((err, admin) => {
      if (err)
        return res.status(400).json(err);

      return res.json({ admin, "message": "Usuario deletado" });
    });
  }

  public loginAdmin(req: Request, res: Response) {
    const { email, password } = req.body;

    if (!email)
      return res.status(422).json({ "message": "Campo Obrigatorio" });

    if (!password)
      return res.status(422).json({ "message": "Campo Obrigatorio" });

    AdminEntity.findOne({ email }, (err: Error, admin: Admin) => {
      if (err)
        return res.status(400).json(err);

      if (!admin)
        return res.status(400).json({ "message": "Admin não encontrado" });
        
      admin.comparePassword(password, (err: Error, isMatch: boolean) => {
        if (err) {
          throw err;
        } else if (!isMatch) {
          return res.status(400).send({ "message": "Senha incorreta." })
        } else {
          return res.send({
            admin,
            token: generateToken({ id: admin.id })
          })
        }

      });
    });
  }
}
