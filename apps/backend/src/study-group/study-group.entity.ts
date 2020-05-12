import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('study_group')
export class StudyGroup {

    @PrimaryColumn()
    id_study_group: number;

    @Column()
    id_student_administrator: number;

    @Column()
    name: string;

    @Column()
    time: string;

    @Column()
    description: string;

    @Column()
    study_material: string;

    @Column()
    place: string;

    @Column()
    day: string;

    @Column()
    meetings_commitment: string;

    @Column()
    periodity: string;

    @Column()
    min_members: number;

    @Column()
    max_members: number;

    @Column()
    additional_info: string;

    @Column()
    status: string;

    @Column()
    accepting_members: string;

}
