import express from 'express';
import { PrismaClient, Prisma } from '@prisma/client';
import * as dotenv from 'dotenv';
import router from './apiRouter';
import bodyParser from 'body-parser';

// Retrieving .env variables.
dotenv.config();

// Instantiating Prisma (ORM) and express app objects.
const prisma = new PrismaClient();
const app = express();

// Applying the body parser so data in multiple formats is accepted by the api.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

// Applying the api zouter file.
app.use(router);

// Booting the api on the set port from .env file.
app.listen(process.env.PORT, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server running on localhost:${process.env.PORT}`);
});
