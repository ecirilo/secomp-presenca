import { Injectable } from '@nestjs/common';
import { IPalestra } from '../domain/palestra';

@Injectable()
export class PalestraService {
  private static palestras: IPalestra[] = [
    {
      nome: 'Palestra 1',
      descricao: 'Descrição da palestra 1',
      id: 1,
    },
    {
      nome: 'Palestra 2',
      descricao: 'Descrição da palestra 2',
      id: 2,
    },
  ];

  async getAll(): Promise<IPalestra[]> {
    return PalestraService.palestras;
  }

  async get(id: string): Promise<IPalestra> {
    return PalestraService.palestras.find(
      (palestra) => palestra.id === Number(id),
    );
  }

  async create(palestra: IPalestra): Promise<IPalestra> {
    palestra.id = PalestraService.palestras.length + 1;
    PalestraService.palestras.push(palestra);
    return palestra;
  }

  async update(id: string, palestra: IPalestra): Promise<IPalestra> {
    PalestraService.palestras = PalestraService.palestras.map((_palestra) =>
      _palestra.id === Number(id) ? palestra : _palestra,
    );
    return palestra;
  }

  async delete(id: string): Promise<void> {
    PalestraService.palestras = PalestraService.palestras.filter(
      (_palestra) => _palestra.id !== Number(id),
    );
  }
}
