import express from 'express';
import { PrismaClient, Prisma } from '@prisma/client';
import * as dotenv from 'dotenv';
import routes from './routes';

dotenv.config();

const prisma = new PrismaClient();
const app = express();

app.use(routes);

app.listen(process.env.PORT, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server running on localhost:${process.env.PORT}`);
});
