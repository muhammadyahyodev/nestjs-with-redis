import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { RedisModule } from './redis/redis.module';

@Module({
  imports: [RedisModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
