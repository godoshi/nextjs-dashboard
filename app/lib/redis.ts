import { createClient } from 'redis';

const redis =  await createClient({ url: process.env.SESSION_REDIS_URL }).connect();

export const GET_JSON = async (key: string) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const result = await redis.json.get(key);
  return JSON.stringify(result);
};

export async function GET_STRING(key: string) {
  const value = await redis.get(key)
  return value;
}