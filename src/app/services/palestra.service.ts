import {Inject, Injectable} from '@nestjs/common';
import { Repository } from 'typeorm';
import { Palestra } from '../domain/palestra.entity';

@Injectable()
export class PalestraService {
  constructor(
    @Inject('PALESTRA_REPOSITORY')
    private readonly repository: Repository<Palestra>,
  ) {}

  async getAll(): Promise<Palestra[]> {
    return this.repository.find();
  }

  async get(id: string): Promise<Palestra> {
    return this.repository.findOneBy({ id: Number(id) });
  }

  async create(palestra: Palestra): Promise<Palestra> {
    return this.repository.save(palestra);
  }

  async update(id: string, palestra: Palestra): Promise<Palestra> {
    const existingPalestra = await this.repository.findOneBy({
      id: Number(id),
    });
    existingPalestra.nome = palestra.nome;
    existingPalestra.descricao = palestra.descricao;
    existingPalestra.horario = palestra.horario;
    return this.repository.save(existingPalestra);
  }

  async delete(id: string): Promise<void> {
    this.repository.delete({ id: Number(id) });
  }
}
