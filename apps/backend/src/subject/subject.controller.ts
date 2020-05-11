import { Controller, Get } from '@nestjs/common';
import { SubjectService } from './subject.service';

@Controller('subject')
export class SubjectController {

  constructor(private service: SubjectService) {}

  @Get()
  findAll() {
    this.service.getSubjects();
  }
}
