import { Injectable } from '@nestjs/common';
import { IPresenca } from '../domain/presenca';
import { DataSource } from '../data-source/data-source.service';

@Injectable()
export class PresencaService {
  constructor(private readonly db: DataSource) {}

  async registrarPresenca(presenca: IPresenca): Promise<IPresenca> {
    const query = `INSERT INTO presenca (palestra_id, aluno_matricula) VALUES (?, ?)`;
    return this.db.query(query, [presenca.palestra_id, presenca.matricula]);
  }

  async getAllByPalestra(id: string): Promise<IPresenca[]> {
    const query = 'SELECT * FROM presenca WHERE palestra_id = ?';
    const results = await this.db.query(query, [id]);
    return results.map((row) => {
      return {
        id: row.id,
        palestra_id: row.palestra_id,
        matricula: row.aluno_matricula,
      };
    });
  }
}
