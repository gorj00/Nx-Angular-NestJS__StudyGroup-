
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudyGroupService } from './study-group.service';
import { StudyGroupController } from './study-group.controller';
import { StudyGroup } from './study-group.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StudyGroup])],
  providers: [StudyGroupService],
  controllers: [StudyGroupController],
})

export class StudyGroupModule { }
