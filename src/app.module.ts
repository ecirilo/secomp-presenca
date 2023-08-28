import { Module } from '@nestjs/common';
import { PalestraController } from './app/controllers/palestra.controller';
import { PalestraService } from './app/services/palestra.service';

@Module({
  imports: [],
  controllers: [PalestraController],
  providers: [PalestraService],
})
export class AppModule {}
