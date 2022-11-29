import express from 'express';
import { PrismaClient, Prisma } from '@prisma/client';
import * as dotenv from 'dotenv';
import router from './apiRouter';
import bodyParser from 'body-parser';

dotenv.config();

const prisma = new PrismaClient();
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.use(router);

app.listen(process.env.PORT, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server running on localhost:${process.env.PORT}`);
});
