import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PalestraService } from '../services/palestra.service';
import { IPalestra } from '../domain/palestra';

@Controller('/palestras')
export class PalestraController {
  constructor(private readonly palestraService: PalestraService) {}

  @Get()
  getPalestras(): Promise<IPalestra[]> {
    console.log('Requisicao para retornar todas as palestras');
    return this.palestraService.getAll();
  }

  @Get(':id')
  getPalestra(@Param('id') id: string): Promise<IPalestra> {
    console.log(`Requisicao para retornar palestra ${id}`);
    return this.palestraService.get(id);
  }

  @Post()
  createPalestra(@Body() palestra: IPalestra): Promise<IPalestra> {
    console.log('Requisicao para criar uma palestra');
    return this.palestraService.create(palestra);
  }

  @Put(':id')
  updatePalestra(
    @Param('id') id: string,
    @Body() palestra: IPalestra,
  ): Promise<IPalestra> {
    return this.palestraService.update(id, palestra);
  }

  @Delete(':id')
  deletePalestra(@Param('id') id: string): Promise<void> {
    console.log(`Requisicao para deletar palestra ${id}`);
    return this.palestraService.delete(id);
  }
}
