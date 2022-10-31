import Redis from 'ioredis';
import { promisify } from 'util';

const redis = new Redis(`${process.env.REDIS_HOST}`);

function getRedis(value: string) {
  const getSyncRedis = promisify(redis.get).bind(redis);
  return getSyncRedis(value);
}

function setRedis(key: string, value: string) {
  const setSyncRedis = promisify(redis.set).bind(redis);
  return setSyncRedis(key, value);
}

export { redis, getRedis, setRedis };
