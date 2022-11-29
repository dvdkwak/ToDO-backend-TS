import express from 'express';
import { PrismaClient, Prisma } from '@prisma/client';

const todoRouter = express.Router();
const prisma = new PrismaClient();

// Post request for a ToDO.
todoRouter.post("/", async (req, res) => {
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

// Retrieving all ToDO's.
todoRouter.get("/", async (req, res) => {
  const todos = await prisma.todo.findMany();
  const data = {
    todos
  };
  res.json(data);
});

export default todoRouter;
