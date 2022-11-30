import { Module } from '@nestjs/common';
import { LandingService } from './landing.service';
import { LandingController } from './landing.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Landing, LandingDocument } from './models/landing.shema';


@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Landing.name, schema: LandingDocument }
    ])
  ],
  controllers: [LandingController],
  providers: [LandingService]
})
export class LandingModule { }
