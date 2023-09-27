import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Presenca } from './presenca.entity';

@Entity('palestra')
export class Palestra {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  descricao: string;

  @OneToMany(() => Presenca, (presenca) => presenca.palestra)
  presencas: Presenca[];
}
