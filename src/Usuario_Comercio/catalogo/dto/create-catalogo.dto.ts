import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, Length } from "class-validator";

export class CreateCatalogoDto {

    @ApiProperty()
    @IsNotEmpty()
    @Length(4, 13)
    codigoBarra: number;
   
    @ApiProperty()
    @IsNotEmpty()
    @Length(10, 20)
    nombreProducto: string;
    
    @ApiProperty()
    @IsNotEmpty()
    @Length(10, 60)
    descripcionProducto: string;

    @ApiProperty()
    @IsNotEmpty()
    fechaVencimientoProducto: string;

    @ApiProperty()
    @IsNotEmpty()
    precio: number;



}
