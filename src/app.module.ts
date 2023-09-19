import { Module } from '@nestjs/common';
import { PalestraController } from './app/controllers/palestra.controller';
import { PalestraService } from './app/services/palestra.service';
import { PresencaController } from './app/controllers/presenca.controller';
import { PresencaService } from './app/services/presenca.service';
import { DataSource } from './app/data-source/data-source.service';

@Module({
  imports: [],
  controllers: [PalestraController, PresencaController],
  providers: [PalestraService, PresencaService, DataSource],
})
export class AppModule {}
