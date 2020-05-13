import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { StudyGroupListService } from './service/study-group-list.service';
import * as EVENTS from './study-group-list.events';
import * as actions from './study-group-list.actions';
import * as models from '@study-group/studgr-models/src/models/study-group-list.model';

@Injectable()
export class StudyGroupListEffects {

  @Effect() studyGroups$ = this.actions$.pipe(
    ofType<actions.StudyGroupListRequest>(EVENTS.REQUEST_ALL),
    switchMap(() =>
        this.service.fetchGroupList().pipe(
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
                  acceptingMembers: studyGroup.accepting_members,
                };
                dataMapped.push(studyGroupRefactored);
              });
              return new actions.StudyGroupListSResponse(dataMapped)
            }),
            catchError(error => of(new actions.StudyGroupFailure(error))),
        ),
    ),
  );

  constructor(private actions$: Actions,
              private service: StudyGroupListService) {}
}
