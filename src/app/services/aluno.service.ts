import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Aluno } from '../domain/aluno.entity';

@Injectable()
export class AlunoService {
  constructor(
    @Inject('ALUNO_REPOSITORY')
    private readonly repository: Repository<Aluno>,
  ) {}

  async getAll(): Promise<Aluno[]> {
    return this.repository.find();
  }

  async get(id: string): Promise<Aluno> {
    return this.repository.findOneBy({ id: Number(id) });
  }

  async create(aluno: Aluno): Promise<Aluno> {
    return this.repository.save(aluno);
  }

  async update(id: string, aluno: Aluno): Promise<Aluno> {
    const existingAluno = await this.repository.findOneBy({
      id: Number(id),
    });
    existingAluno.nome = aluno.nome;
    existingAluno.matricula = aluno.matricula;
    return this.repository.save(existingAluno);
  }

  async delete(id: string): Promise<void> {
    this.repository.delete({ id: Number(id) });
  }
}
