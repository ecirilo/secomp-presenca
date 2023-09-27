import { Module } from '@nestjs/common';
import { PalestraController } from './app/controllers/palestra.controller';
import { PalestraService } from './app/services/palestra.service';
import { PresencaController } from './app/controllers/presenca.controller';
import { PresencaService } from './app/services/presenca.service';
import { DatabaseModule } from './app/data-source/database.module';
import { AlunoController } from './app/controllers/aluno.controller';
import { AlunoService } from './app/services/aluno.service';

@Module({
  imports: [DatabaseModule],
  controllers: [PalestraController, PresencaController, AlunoController],
  providers: [PalestraService, PresencaService, AlunoService],
})
export class AppModule {}
