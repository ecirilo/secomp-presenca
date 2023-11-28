import { DataSource } from 'typeorm';
import { Presenca } from '../domain/presenca.entity';
import { Palestra } from '../domain/palestra.entity';
import { Aluno } from '../domain/aluno.entity';
import { User } from '../domain/user.entity';

export const repositoryProviders = [
  {
    provide: 'PRESENCA_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Presenca),
    inject: ['MYSQL_DATA_SOURCE'],
  },
  {
    provide: 'PALESTRA_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Palestra),
    inject: ['MYSQL_DATA_SOURCE'],
  },
  {
    provide: 'ALUNO_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Aluno),
    inject: ['MYSQL_DATA_SOURCE'],
  },
  {
    provide: 'USER_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
    inject: ['MYSQL_DATA_SOURCE'],
  },
];
