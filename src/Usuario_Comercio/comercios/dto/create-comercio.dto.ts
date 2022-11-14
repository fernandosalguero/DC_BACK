// Estas son las propiedades que necesitamos para registrar un comercio

import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateComercioDto {

    @ApiProperty()
    @IsNotEmpty()
    horariosDeAtencion: string;
    

}
