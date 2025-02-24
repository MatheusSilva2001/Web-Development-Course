import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/app-error";
import { z } from "zod";

// zod
const UserSchema = z.object({
  name: z.string({message: "Nome é obrigatório!"}).min(3, "Mínimo de 3 caracteres"),
  series: z.string().max(255, "Máximo de 255 caracteres"),
  age: z.number(),
  email: z.string().email(),
});



export const userControllers = {
  create(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, series, age } = UserSchema.parse(req.body);

      if (!name || !series) {
        throw new AppError(500, "Todos os dados são obrigatórios")
      }

      console.log({ name, series });

      res.status(201).json({ message: "User created successfully" });
    } catch (error) {
      next(error);
    }
  },

  read(req: Request, res: Response) {
    const { id } = req.params;
    res.status(200).json({ message: `User with id ${id} read successfully` });
  },

  update(req: Request, res: Response) {
    const { id } = req.params;
    const { name, series } = req.body;

    console.log({ id, name, series });

    res.status(200).json({ message: "User update successfully" });
  },

  delete(req: Request, res: Response) {
    const { id } = req.params;
    const { name, series } = req.body;

    res.status(200).json({ message: "User deleted successfully" });
  },
};
