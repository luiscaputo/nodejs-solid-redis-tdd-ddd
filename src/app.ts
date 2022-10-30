import 'reflect-metadata';
import './configs/env';
import 'express-async-errors';
import cors from 'cors';
import express from 'express';
import logger from 'morgan';

// eslint-disable-next-line import-helpers/order-imports
import { AppDataSource } from './configs/db';

import '~/shared/container';
import { versions } from './configs/versions';
import router from './routes';
import { errors } from './shared/errors/customErrors';

const app = express();
AppDataSource.initialize();

app.use(express.json());

app.use(express.json());
app.use(logger('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use('/uploads', express.static('uploads'));
app.use('/storage', express.static('storage'));

app.use(versions.current, router);

app.use(errors);

export default app;
