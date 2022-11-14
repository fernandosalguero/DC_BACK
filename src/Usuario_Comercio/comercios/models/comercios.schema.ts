// Este documento crea la base de datos en Mongoose,
// por eso colcoamos las propiedades para que generen la base de datos

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


export type ComercioDocument = Comercio & Document;

@Schema({timestamps: true})
export class Comercio {

    @Prop({required: true})
    horariosDeAtencion: string;

    
}


export const ComercioDocument = SchemaFactory.createForClass(Comercio);

// contamos con 3 propiedades:
// Prop: Propiedades para grabar
// Schema: Hace referencia al Schema
// SchemaFactory: Hace referencia al metodo que crea el Schema
