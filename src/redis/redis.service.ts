import { Inject, Injectable, OnModuleDestroy } from '@nestjs/common';
import { SetRedisDto } from './dto/set-redis.dto';
import { RedisClient, REDIS_CLIENT } from './redis-client.type';

@Injectable()
export class RedisService implements OnModuleDestroy {
  constructor(
    @Inject(REDIS_CLIENT) private readonly redisClient: RedisClient,
  ) {}

  onModuleDestroy() {
    this.redisClient.quit();
  }

  ping() {
    return this.redisClient.ping();
  }

  async set(setRedisDto: SetRedisDto) {
    const { key, value } = setRedisDto;
    await this.redisClient.set(key, value, { EX: 10 });

    return `Set value to Redis: ${value}`;
  }

  async get(key: string) {
    const value = await this.redisClient.get(key); // berilgan vaqtdan(10) so'ng delete qiladi
    // const value = await this.redisClient.getDel(key); // bir marta qaytargan so'ng delete qiladi
    // await this.redisClient.del(key);
    // await this.redisClient.exists(key);

    return `Set value to Redis: ${value}`;
  }
}
