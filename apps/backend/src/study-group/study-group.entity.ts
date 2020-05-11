import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('study_group')
export class StudyGroup {

    @PrimaryColumn()
    id_study_group: number;

    @Column()
    id_student: number;

    @Column()
    sg_time: string;

    @Column()
    sg_description: string;

    @Column()
    sg_study_material: string;

    @Column()
    sg_place: string;

    @Column()
    sg_day: string;

    @Column()
    sg_meetings_commitment: string;

    @Column()
    sg_periodity: string;

    @Column()
    sg_min_members: number;

    @Column()
    sg_max_members: number;

    @Column()
    sg_additional_info: string;

    @Column()
    sg_status: string;

    @Column()
    sg_accepting_members: string;

    @Column('varchar', { length: 225 })
    sg_name;

}
