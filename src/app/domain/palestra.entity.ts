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

  @Column({ type: 'timestamp' })
  horario: Date;

  @OneToMany(() => Presenca, (presenca: Presenca) => presenca.palestra)
  presencas: Presenca[];
}
