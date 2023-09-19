import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { IPresenca } from '../domain/presenca';
import { PresencaService } from '../services/presenca.service';

@Controller('/presencas')
export class PresencaController {
  constructor(private readonly presencaService: PresencaService) {}

  @Get(':id')
  getAllByPalestra(@Param('id') id: string): Promise<IPresenca[]> {
    console.log(`Requisicao para retornar todas as presencas na palestra`);
    return this.presencaService.getAllByPalestra(id);
  }

  @Post()
  registrarPresemca(@Body() presenca: IPresenca): Promise<IPresenca> {
    console.log(`Requisicao para registrar presenca na palestra ${presenca}`);
    return this.presencaService.registrarPresenca(presenca);
  }
}
