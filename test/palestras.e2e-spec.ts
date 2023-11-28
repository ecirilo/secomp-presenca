import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('PalestrasController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/palestras (GET)', () => {
    return request(app.getHttpServer())
      .get('/palestras')
      .expect(200)
      .expect([
        {
          id: 12,
          nome: 'Humano-Robô na era da Inteligência Artificial Generativa',
          descricao:
            'A palestra tratará dos desafios e as oportunidades da Interação Humano-Robô (IHR) na era da Inteligência Artificial Generativa (IAG). A IAG é uma área da IA que visa criar conteúdo original e relevante a partir de dados, como textos, imagens, sons, vídeos e outros. A IHR é o estudo de como os humanos e os robôs podem se comunicar, colaborar e conviver de forma eficaz e satisfatória. A palestra apresentará alguns conceitos, aplicações e tendências da IAG e da IHR, bem como as implicações éticas, sociais e legais dessas tecnologias. A palestra também discutirá como a IAG pode contribuir para o desenvolvimento de robôs mais inteligentes, criativos e empáticos, capazes de se adaptar às necessidades e preferências dos humanos.',
          horario: '2023-11-09T03:00:00.000Z',
        },
        {
          id: 14,
          nome: 'Além dos Códigos: Trajetória e Lições da Ciência da Computação na Vida Acadêmica e Profissional',
          descricao:
            'Você já esteve em uma palestra SECOMP onde se sentiu perdido, como se estivessem falando em outra língua? Você já reclinou na cadeira quando o palestrante fala de sua experiência e parece que programar em C, ou mesmo fazer IC, não é valorizado? Você se questionou qual será o próximo passo após a graduação ou tem dúvidas sobre como aplicar o que aprendeu? Bem, nós já estivemos no seu lugar. Nesta palestra, vamos explorar a jornada da Ciência da Computação de forma simples e amigável, destacando como os conhecimentos adquiridos na UFSJ podem ser úteis tanto na vida acadêmica quanto na profissional. Compartilharemos nossas próprias experiências, discutindo o que funcionou para nós e como enfrentamos os desafios. Queremos mostrar que, apesar dos obstáculos, existem caminhos e possiblidades, mas que demandam determinação. Se você busca compreender como aplicar seus estudos de forma prática, entender as possibilidades da pós-graduação e quer ter uma visão realista do mercado de trabalho, esta palestra é para você. Venha conversar conosco, de forma descontraída e divertida, enquanto abordamos lições valiosas que definitivamente vão te auxiliar nessa jornada.',
          horario: '2023-11-10T03:00:00.000Z',
        },
      ]);
  });
});
