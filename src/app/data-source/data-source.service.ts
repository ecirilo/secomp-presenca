import * as mysql from 'mysql';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DataSource {
  private readonly connection;

  constructor() {
    this.connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '123@456@789',
      database: 'secomp-presenca',
      port: 3308,
    });

    this.connection.connect((err) => {
      if (err) throw err;
    });
  }

  query(query: string, values?: any[]): Promise<any> {
    return new Promise((resolve, reject) => {
      this.connection.query(query, values, (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }
}
