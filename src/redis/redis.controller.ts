import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SetRedisDto } from './dto/set-redis.dto';
import { RedisService } from './redis.service';

@Controller('redis')
export class RedisController {
  constructor(private readonly redisService: RedisService) {}

  @Get('ping')
  getPing() {
    return this.redisService.ping();
  }

  @Post('set')
  set(@Body() setRedisDto: SetRedisDto) {
    return this.redisService.set(setRedisDto);
  }

  @Get('get:key')
  get(@Param('key') key: string) {
    return this.redisService.get(key);
  }
}
