import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Palestra } from './palestra.entity';
import { Aluno } from './aluno.entity';

@Entity('presenca')
export class Presenca {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Aluno, (aluno) => aluno.presencas, {
    eager: true,
  })
  @JoinColumn({ name: 'aluno_id' })
  aluno: Aluno;

  @ManyToOne(() => Palestra, (palestra) => palestra.presencas)
  @JoinColumn({ name: 'palestra_id' })
  palestra: Palestra;
}
