// Este documento crea la base de datos en Mongoose,
// por eso colcoamos las propiedades para que generen la base de datos

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LandingDocument = Landing & Document;

@Schema({timestamps: true})

export class Landing {

    @Prop({required: true})
    email: string;

}


export const LandingDocument = SchemaFactory.createForClass(Landing);

