import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as models from '@study-group/studgr-models/src/models/study-group-list.model';

@Injectable()
export class StudyGroupInterceptor
  implements
    NestInterceptor<
      models.IStudyGroupListDBResponse[],
      models.IStudyGroupList[]
    > {

  intercept(
    context: ExecutionContext,
    next: CallHandler
  ): Observable<models.IStudyGroupList[]> {
    return next.handle().pipe(
      map((data: models.IStudyGroupListDBResponse[]) => {
        const dataMapped: models.IStudyGroupList[] = [];
        data.forEach(studyGroup => {
          const studyGroupRefactored = {
            studyGroupId: studyGroup.id_study_group,
            studentId: studyGroup.id_student_administrator,
            name: studyGroup.name,
            time: studyGroup.time,
            description: studyGroup.description,
            studyMaterial: studyGroup.study_material,
            place: studyGroup.place,
            day: studyGroup.day,
            meetingsCommitment: studyGroup.meetings_commitment,
            periodity: studyGroup.periodity,
            minMembers: studyGroup.min_members,
            maxMembers: studyGroup.max_members,
            additionalInfo: studyGroup.additional_info,
            status: studyGroup.status,
            acceptingMembers: studyGroup.accepting_members
          };
          dataMapped.push(studyGroupRefactored);
        });
        return dataMapped;
      })
    );
  }
}
