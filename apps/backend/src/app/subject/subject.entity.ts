import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn
} from 'typeorm';

@Entity('subject')
export class Subject {
  @PrimaryColumn()
  id_subject: number;

  @Column('varchar', { length: 225 })
  sb_name;

  @Column('time')
  sb_time;

  @CreateDateColumn()
  sb_date: Date;
}
