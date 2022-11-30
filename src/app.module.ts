import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

//MODULOS PROPIOS CREADOS
import { AuthModule } from './auth/auth.module';
import { UsuarioComercioModule } from './Usuario_Comercio/usuario_comercio.module';
import { UsuarioFamiliaModule } from './Usuario_Familia/usuario_familia.module';
import { UsersModule } from './users/users.module';
import { LandingModule } from './landing/landing.module';




@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    //REDIRECCIONAMOS AL HTML DE SERVICIO
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),

    //NOS CONECTAMOS A LA BASE DE DATOS
    MongooseModule.forRoot(process.env.DB_URI),

    //modulos propios
    AuthModule,
    UsuarioComercioModule,
    UsuarioFamiliaModule,
    UsersModule,
    LandingModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
