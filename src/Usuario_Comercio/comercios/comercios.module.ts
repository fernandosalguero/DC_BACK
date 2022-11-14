import { Module } from '@nestjs/common';
import { ComerciosService } from './comercios.service';
import { ComerciosController } from './comercios.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Comercio, ComercioDocument } from './models/comercios.schema';
import { Usuarios, UsuariosDocument } from 'src/users/models/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature(
      [
        {name: Comercio.name, schema: ComercioDocument},
        {name: Usuarios.name, schema: UsuariosDocument},
      ]
    )
  ],
  controllers: [ComerciosController],
  providers: [ComerciosService]
})
export class ComerciosModule {}
