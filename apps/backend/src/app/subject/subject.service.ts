import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Subject } from './subject.entity';

@Injectable()
export class SubjectService {
  constructor(
    @InjectRepository(Subject) private subjectRepository: Repository<Subject>
  ) {}

  async getSubjects(): Promise<Subject[]> {
    return await this.subjectRepository.find();
  }

  async postSubject(subject: Subject) {
    this.subjectRepository.create(subject);
  }

  async updateSubject(subject: Subject) {
    this.subjectRepository.save(subject);
  }

  async deleteSubject(subject: Subject) {
    this.subjectRepository.delete(subject);
  }
}
