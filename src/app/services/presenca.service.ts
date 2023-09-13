import { Injectable } from '@nestjs/common';
import { IPresenca } from '../domain/presenca';

@Injectable()
export class PresencaService {
  private static presencas: IPresenca[] = undefined;

  async registrarPresenca(presenca: IPresenca): Promise<IPresenca> {
    PresencaService.presencas.push(presenca);
    return presenca;
  }

  async getAllByPalestra(): Promise<IPresenca[]> {
    console.log(PresencaService.presencas);
    return PresencaService.presencas;
  }
}
