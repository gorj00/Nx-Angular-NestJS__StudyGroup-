import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Demo {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 225 })
    name: string;
}
