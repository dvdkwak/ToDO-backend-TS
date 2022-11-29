import express from 'express';
import { PrismaClient, Prisma } from '@prisma/client';

const todoRouter = express.Router();
const prisma = new PrismaClient();

todoRouter.post("/create", async (req, res) => {
  let todo: Prisma.TodoCreateInput;
  todo = {
    title: req.body.title,
    body: req.body.body
  };
  await prisma.todo.create({data: todo})
    .then(() => {
      res.sendStatus(200);
    })
    .catch((e) => {
      console.error(e);
      res.sendStatus(500);
    });
});

export default todoRouter;
