import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AlunoService } from '../services/aluno.service';
import { Aluno } from '../domain/aluno.entity';

@Controller('/alunos')
export class AlunoController {
  constructor(private readonly alunoService: AlunoService) {}

  @Get()
  getAlunos(): Promise<Aluno[]> {
    console.log('Requisicao para retornar todas os alunos');
    return this.alunoService.getAll();
  }

  @Get(':id')
  getAluno(@Param('id') id: string): Promise<Aluno> {
    console.log(`Requisicao para retornar aluno ${id}`);
    return this.alunoService.get(id);
  }

  @Post()
  createAluno(@Body() aluno: Aluno): Promise<Aluno> {
    console.log('Requisicao para criar um aluno');
    return this.alunoService.create(aluno);
  }

  @Put(':id')
  updateAluno(@Param('id') id: string, @Body() aluno: Aluno): Promise<Aluno> {
    console.log(`Requisicao para atualizar aluno ${id}`);
    return this.alunoService.update(id, aluno);
  }

  @Delete(':id')
  deletePalestra(@Param('id') id: string): Promise<void> {
    console.log(`Requisicao para deletar aluno ${id}`);
    return this.alunoService.delete(id);
  }
}
