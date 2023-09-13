import {Body, Controller, Get, Post} from '@nestjs/common';
import {IPresenca} from '../domain/presenca';
import {PresencaService} from '../services/presenca.service';

@Controller('/presencas')
export class PresencaController {
  constructor(private readonly presencaService: PresencaService) {}

  @Get()
  getAllByPalestra(): Promise<IPresenca[]> {
    console.log(`Requisicao para retornar todas as presencas na palestra`);
    return this.presencaService.getAllByPalestra();
  }

  @Post()
  registrarPresemca(@Body() presenca: IPresenca): Promise<IPresenca> {
    console.log(`Requisicao para registrar presenca na palestra ${presenca}`);
    return this.presencaService.registrarPresenca(presenca);
  }
}
