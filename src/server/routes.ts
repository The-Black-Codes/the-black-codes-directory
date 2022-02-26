import { Router } from "express";
import { getRepository } from "typeorm";
import { User } from "../models/User";

export const usersRouter = Router();
usersRouter
  .get("/api/users", async (req, res) => {
    const usersRepo = getRepository(User);
    const users = await usersRepo.find();
    res.json({
      status: 200,
      data: users,
    });
  })
  .get("/api/users/:id", async (req, res) => {
    const { id } = req.params;
    const usersRepo = getRepository(User);
    const user = await usersRepo.findOne({ id: Number(id) });
    if (!user)
      return res.json({
        status: 404,
        data: null,
      });
    return res.json({
      status: 200,
      data: user,
    });
  })
  .post("/api/users", async (req, res) => {
    const usersRepo = getRepository(User);
    try {
      const user = usersRepo.create(req.body);
      await usersRepo.save(user);
      return res.json({
        status: 201,
        data: user,
      });
    } catch (error) {
      return res.json({
        status: 500,
        data: null,
      });
    }
  });
