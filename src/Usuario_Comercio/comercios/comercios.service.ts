import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateComercioDto } from './dto/create-comercio.dto';
import { UpdateComercioDto } from './dto/update-comercio.dto';
import { Comercio, ComercioDocument } from './models/comercios.schema';

@Injectable()
export class ComerciosService {

  constructor(@InjectModel(Comercio.name) private readonly comercioModel:Model<ComercioDocument>){
    
  }

  create(createComercioDto: CreateComercioDto) {
    return this.comercioModel.create(createComercioDto)
    return createComercioDto

  }

  findAll() {
    return `This action returns all comercios`;
  }

  findOne(id: number) {
    return `This action returns a #${id} comercio`;
  }

  update(id: number, updateComercioDto: UpdateComercioDto) {
    return `This action updates a #${id} comercio`;
  }

  remove(id: number) {
    return `This action removes a #${id} comercio`;
  }
}
