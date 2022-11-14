import { IsEmail, IsNotEmpty } from "class-validator";

export class LoginAuthDto{
    @IsNotEmpty()
    @IsEmail({unique: true})
    userName: string;
    
    @IsNotEmpty()
    password: string;
}