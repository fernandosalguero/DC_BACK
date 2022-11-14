import { Module } from '@nestjs/common';
import { PromosService } from './promos.service';
import { PromosController } from './promos.controller';

@Module({
  controllers: [PromosController],
  providers: [PromosService]
})
export class PromosModule {}
