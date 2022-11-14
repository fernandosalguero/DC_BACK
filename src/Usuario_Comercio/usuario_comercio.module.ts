import { Module } from '@nestjs/common';
import { ComerciosModule } from './comercios/comercios.module';
import { CatalogoModule } from './catalogo/catalogo.module';
import { PromosModule } from './promos/promos.module';

@Module({
  imports: [ComerciosModule, CatalogoModule, PromosModule]
})
export class UsuarioComercioModule {}
