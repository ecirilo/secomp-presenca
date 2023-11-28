import { UserService } from './user.service';
import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseModule } from '../data-source/database.module';

describe('UserService', (): void => {
  let service: UserService;

  beforeEach(async (): Promise<void> => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule],
      providers: [UserService],
    }).compile();
    service = module.get(UserService);
  });

  it('retorna um user', async (): Promise<void> => {
    expect(await service.get('elder')).toEqual({
      id: 1,
      nome: 'elder',
      senha: 'a123456',
    });
  });
});
