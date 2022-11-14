// Este documento crea la base de datos en Mongoose,
// por eso colcoamos las propiedades para que generen la base de datos

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type UsuariosDocument = Usuarios & Document;

@Schema({timestamps: true})
export class Usuarios {
    @Prop({required: true})
    nombreComleto: string;

    @Prop({required: true, unique: true})
    userName: string;
    
    @Prop({required: true})
    password: string;

    // @Prop()
    // idUser: mongoose.Types.ObjectId;

    @Prop({required: true})
    provincia : string;
    
    @Prop({required: true})
    localidad: string;
    
    
    @Prop({required: true})
    terms: string;

    @Prop({required: true})
    rol: string;
}


export const UsuariosDocument = SchemaFactory.createForClass(Usuarios);

// contamos con 3 propiedades:
// Prop: Propiedades para grabar
// Schema: Hace referencia al Schema
// SchemaFactory: Hace referencia al metodo que crea el Schema
