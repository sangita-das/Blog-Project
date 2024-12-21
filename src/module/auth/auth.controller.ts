import { Request, Response } from 'express';
import AuthService from './auth.service';

export default class AuthController {
  static async register(req: Request, res: Response) {
    const user = await AuthService.register(req.body);
    res.status(201).json({ user });
  }

  static async login(req: Request, res: Response) {
    const { email, password } = req.body;
    const token = await AuthService.login(email, password);
    res.status(200).json({ token });
  }
}
