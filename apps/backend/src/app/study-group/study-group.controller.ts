import { Controller, Get, Param, UseInterceptors } from '@nestjs/common';
import { StudyGroupService } from './study-group.service';
import { StudyGroup } from './study-group.entity';
import { StudyGroupInterceptor } from './study-group.interceptor';
@Controller('study-group')
export class StudyGroupController {

  constructor(private service: StudyGroupService) {}


  @UseInterceptors(StudyGroupInterceptor)
  @Get()
  findAll(): Promise<StudyGroup[]> {
    return this.service.getStudyGroups();
  }

  @Get(':id')
  find(@Param() param) {
    this.service.getStudyGroup(param);
  }
}
