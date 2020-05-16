import { Component } from '@angular/core';
import { StudyGroupListCoreContainer } from '@study-group/studgr-core';
import { StudyGroupListFacade } from '@study-group/studgr-redux';
import { skip } from 'rxjs/operators';

@Component({
  selector: 'app-study-groups-container',
  template: `
    <app-study-groups
      [studyGroups]="allStudyGroups$ | async"
      [studentsStudyGroups]="(allStudyGroups$ | async)"
    ></app-study-groups>
  `
})
export class StudyGroupsContainer extends StudyGroupListCoreContainer {
  constructor(facade: StudyGroupListFacade) {
    super(facade);
  }
}
