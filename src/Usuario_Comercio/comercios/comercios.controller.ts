// controlador que maneja el servicio para registrar un comercio

import { Controller, Post, Body, HttpCode, HttpException, HttpStatus, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SlugPipe } from '../Pipes/slug.pipe';
import { ComerciosService } from './comercios.service';
import { CreateComercioDto } from './dto/create-comercio.dto';

@ApiTags('UsuarioComercio_Comercio')
@Controller('comercios')
export class ComerciosController {
  
  constructor(private readonly comerciosService: ComerciosService) {}

  @Post()
  @HttpCode(201)
  create(@Body() create: CreateComercioDto){
   return this.comerciosService.create(create)
  }

  @Get(':id')
  getDetail(@Param('id', new SlugPipe) id:number){
    return this.comerciosService.findOne(id)
  }
}
