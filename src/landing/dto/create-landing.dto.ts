import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateLandingDto {
    
    @ApiProperty()
    @IsNotEmpty()
    @IsEmail({unique: true})
    email: string

}
