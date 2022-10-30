import dotenv from 'dotenv-safe';

dotenv.config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
  allowEmptyValues: true,
});
