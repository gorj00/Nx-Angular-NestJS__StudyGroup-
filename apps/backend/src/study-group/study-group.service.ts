import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StudyGroup } from './study-group.entity';

@Injectable()
export class StudyGroupService {
  constructor(
    @InjectRepository(StudyGroup)
    private studyGroupRepository: Repository<StudyGroup>
  ) {}

  async getStudyGroups(): Promise<StudyGroup[]> {
    return await this.studyGroupRepository.find({
      take: 10
  });
  }

  async getStudyGroup(id_study_group: number): Promise<StudyGroup[]> {
    return await this.studyGroupRepository.find({
      where: [{ id_study_group }]
    });
  }

  postStudyGroup(studyGroup: StudyGroup) {
    this.studyGroupRepository.create(studyGroup);
  }

  updateStudyGroup(studyGroup: StudyGroup) {
    this.studyGroupRepository.save(studyGroup);
  }

  deleteStudyGroup(studyGroup: StudyGroup) {
    this.studyGroupRepository.delete(studyGroup);
  }
}
