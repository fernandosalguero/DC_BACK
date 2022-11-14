import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Usuarios, UsuariosDocument } from 'src/users/models/user.schema';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    // TOKEN
    JwtModule.registerAsync({
      useFactory: () => {
        return {
          signOptions: { expiresIn: '3h'},
          secret: process.env.JWT_SECRET
        }
      }
    }),
    MongooseModule.forFeature([
      {
        name: Usuarios.name, schema: UsuariosDocument
      }
    ])
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
