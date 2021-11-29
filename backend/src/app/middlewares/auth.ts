import { NextFunction, Request, Response } from "express";
import * as jwtService from "jsonwebtoken";
require("dotenv").config();

const privateKey = process.env.TOKEN_KEY;
export default function ValidationJWT(req: Request, res: Response, next: NextFunction) {
  const jwt: any = req.headers.authentication;


  if (!jwt)
    return res.status(401).send({ error: "No token provided." });

  const parts = jwt.split(' ');

  if (!parts.length === 2)
    return res.status(401).send({ error: "Token error." });

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme))
    return res.status(401).send({ error: "Token malformated." })

  if (privateKey)
    jwtService.verify(token, privateKey, (err: any, decoded: any) => {
      if (err) {
        return res.status(401).end({ error: "Token invalid." });

      }

      req.userId = decoded.id;
      return next();
    });
}

export function generateToken(params = {}) {
  if (privateKey)
    return jwtService.sign(params, privateKey, { expiresIn: 86400 });
}
