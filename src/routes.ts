import express from 'express';
import { PrismaClient, Prisma } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

router.get("/", (req, res) => {
  res.send({"message": "Hello there world!"});
});

export default router;
