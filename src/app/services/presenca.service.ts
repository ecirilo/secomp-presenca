import { Inject, Injectable } from '@nestjs/common';
import { Presenca } from '../domain/presenca.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PresencaService {
  constructor(
    @Inject('PRESENCA_REPOSITORY')
    private readonly repository: Repository<Presenca>,
  ) {}

  async registrarPresenca(presenca: Presenca): Promise<Presenca> {
    return this.repository.save(presenca);
  }

  async getAllByPalestra(id: string): Promise<Presenca[]> {
    return null;
  }
}
