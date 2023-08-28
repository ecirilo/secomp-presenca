import { Test, TestingModule } from '@nestjs/testing';
import { PalestraController } from './palestra.controller';
import { PalestraService } from '../services/palestra.service';

describe('PalestraController', () => {
  let appController: PalestraController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PalestraController],
      providers: [PalestraService],
    }).compile();

    appController = app.get<PalestraController>(PalestraController);
  });

  describe('root', () => {
    it('should return all Palestras', () => {
      expect(appController.getPalestras()).toBe([
        {
          nome: 'Palestra 1',
          descricao: 'Descrição da palestra 1',
        },
        {
          nome: 'Palestra 2',
          descricao: 'Descrição da palestra 2',
        },
      ]);
    });
  });
});
