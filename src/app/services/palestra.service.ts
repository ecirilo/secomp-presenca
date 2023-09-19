import { Injectable } from '@nestjs/common';
import { IPalestra } from '../domain/palestra';
import { DataSource } from '../data-source/data-source.service';

@Injectable()
export class PalestraService {
  constructor(private readonly db: DataSource) {}

  async getAll(): Promise<IPalestra[]> {
    const results = await this.db.query('SELECT * FROM palestra');
    return results.map((row) => {
      return {
        id: row.id,
        nome: row.nome,
        descricao: row.descricao,
      };
    });
  }

  async get(id: string): Promise<IPalestra> {
    const query = 'SELECT * FROM palestra WHERE id = ?';
    const results = await this.db.query(query, [id]);
    return {
      id: results[0].id,
      nome: results[0].nome,
      descricao: results[0].descricao,
    };
  }

  async create(palestra: IPalestra): Promise<IPalestra> {
    const query = `INSERT INTO palestra (nome, descricao) VALUES (?, ?)`;
    return this.db.query(query, [palestra.nome, palestra.descricao]);
  }

  async update(id: string, palestra: IPalestra): Promise<IPalestra> {
    const query = 'UPDATE palestra SET nome = ?, descricao = ? WHERE id = ?';
    return this.db.query(query, [palestra.nome, palestra.descricao, id]);
  }

  async delete(id: string): Promise<void> {
    const query = 'DELETE FROM palestra WHERE id = ?';
    return this.db.query(query, [id]);
  }
}
