import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/login-auth-dto';
import { RegisterAuthDto } from './dto/register-auth-dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  // FUNCION DE REGISTRO
  @Post('registro')
  handleRegister(@Body() registerBody: RegisterAuthDto) {
    // console.log(registerBody);
    return this.authService.register(registerBody)
    
  }

  // FUNCION DE LOGIN
  @Post('login')
  handleLogin(@Body() loginBody: LoginAuthDto) {
    return this.authService.login(loginBody)
  }


}
