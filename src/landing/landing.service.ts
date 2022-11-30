import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateLandingDto } from './dto/create-landing.dto';
import { UpdateLandingDto } from './dto/update-landing.dto';
import { Landing, LandingDocument } from './models/landing.shema';

@Injectable()
export class LandingService {

  constructor(@InjectModel(Landing.name) private readonly landingModel: Model<LandingDocument>){

  }

  create(createLandingDto: CreateLandingDto) {
   return this.landingModel.create(CreateLandingDto)
  }

  findAll() {
    return `This action returns all landing`;
  }

  findOne(id: number) {
    return `This action returns a #${id} landing`;
  }

  update(id: number, updateLandingDto: UpdateLandingDto) {
    return `This action updates a #${id} landing`;
  }

  remove(id: number) {
    return `This action removes a #${id} landing`;
  }
}
