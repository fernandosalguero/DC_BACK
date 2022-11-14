import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Usuarios, UsuariosDocument } from 'src/users/models/user.schema';
import { LoginAuthDto } from './dto/login-auth-dto';
import { RegisterAuthDto } from './dto/register-auth-dto';
import { compareHash, generateHash } from './utils/handleBcrypt';

@Injectable()
export class AuthService {

    constructor(
        private readonly jwtService:JwtService,
        @InjectModel(Usuarios.name) private readonly userModel: Model<UsuariosDocument>
    ) { }

    // LOGIN DE USUARIOS
    public async login(userLoginBody: LoginAuthDto) {

        // destructuramos
        const {password} = userLoginBody;

        //comparamos si existe un correo en nuestra base de datos
        const userExist = await this.userModel.findOne({ userName: userLoginBody.userName });
        // console.log(userExist);
        if (!userExist) throw new HttpException('NOT_FOUND', HttpStatus.NOT_FOUND)

        //COMPARAMOS EL ENCRIPTADO DE LA BD CON LA CONTRASEÑA

        const isCheck = await compareHash(password, userExist.password)
        if (!isCheck) throw new HttpException('PASSWORD_INVALID', HttpStatus.CONFLICT)

        //eliminamos la contraseña
        const userFlat = userExist.toObject()
        delete userFlat.password

        const payload = {
            id: userFlat._id
        }

        const token = this.jwtService.sign(payload)

        const data = {
            token: token,
            user: userFlat
        }
        
        return data
    }


    // REGISTRO DE USUARIOS
    // GUARDAMOS EN LA BASE DE DATOS EL REGISTRO DEL USUARIO (LO REGISTRAMOS)
    public async register(userBody: RegisterAuthDto) {
        const { password, ...user } = userBody;
        const userParse = {
            ...user, password: await generateHash(password)
        }
        return this.userModel.create(userParse)
    }
}
