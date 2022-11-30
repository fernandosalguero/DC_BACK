// Este es el archivo con el que arranca la aplicación

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { json } from 'express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true
  });

  //LIMITE DE PETICIONES POST
  app.use(json({ limit: '60mb' }));

  //API DE DOCUMENTACIÓN
  const config = new DocumentBuilder()
    .setTitle('Documentación API DóndeCompro?')
    .setDescription('Esta es la documentación que muestra las rutas de trabajo')
    .addTag('UsuarioComercio_Comercio')
    .addTag('UsuarioComercio_Catalogo')
    .addTag('UsuarioComercio_Promosiones')
    .addTag('Correos_Landing')
    .addTag('UsuariosFamilia')
    .addTag('')

    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentationAPI', app, document)

  // Validadores globales 
  app.useGlobalPipes(new ValidationPipe())
  
  await app.listen(3000);
}
bootstrap();
