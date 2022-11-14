import { IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class RegisterAuthDto {

    @IsNotEmpty()
    nombreComleto: string;
    
    @IsNotEmpty()
    @IsEmail({unique: true})
    userName: string;
    
    @IsNotEmpty()
    password: string;
    
    @IsNotEmpty()
    provincia: string;
   
    @IsNotEmpty()
    localidad: string;
   
    @IsNotEmpty()
    terms: string;
    
    @IsNotEmpty()
    rol: string;

}