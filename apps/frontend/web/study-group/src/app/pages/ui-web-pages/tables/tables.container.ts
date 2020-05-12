import { Component } from '@angular/core';
import { StudyGroupListCoreContainer } from '@study-group/studgr-core';
import { StudyGroupListFacade } from '@study-group/studgr-redux';

@Component({
  selector: 'app-main-tables',
  template: `
    <app-tables [studyGroups]="allStudyGroups$ | async"></app-tables>
  `
})
export class TablesContainer extends StudyGroupListCoreContainer {
  constructor(facade: StudyGroupListFacade) {
    super(facade);
  }
}
