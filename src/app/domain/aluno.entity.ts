import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import { Presenca } from './presenca.entity';

@Entity('aluno')
export class Aluno {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  matricula: string;

  @OneToMany(() => Presenca, (presenca) => presenca.aluno)
  presencas: Presenca[];
}
