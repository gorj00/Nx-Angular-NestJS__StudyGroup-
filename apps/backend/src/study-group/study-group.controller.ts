import { Controller, Get, Param  } from '@nestjs/common';
import { StudyGroupService } from './study-group.service';
import { StudyGroup } from './study-group.entity';

@Controller('study-group')
export class StudyGroupController {

  constructor(private service: StudyGroupService) {}

  @Get()
  findAll(): Promise<StudyGroup[]> {
    return this.service.getStudyGroups();
  }

  @Get(':id')
  find(@Param() param) {
    this.service.getStudyGroup(param);
  }
}
