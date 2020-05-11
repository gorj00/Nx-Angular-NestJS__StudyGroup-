import { StudyGroupListFacade } from '@study-group/studgr-redux';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IStudyGroupList } from '@study-group/studgr-models';

export class StudyGroupListCoreContainer {

  constructor(protected studyGroupListFacade: StudyGroupListFacade) {
    // Fetching data from the database with Redux
    this.studyGroupListFacade.fetchAllStudyGroups();
  }

  // Observable of fetched study sgroups
  getAllStudyGroups$: Observable<IStudyGroupList[]> = this.studyGroupListFacade
  .getAllStudyGroups$
    .pipe(
      map(studyGroups => studyGroups)
    );

  // Navigation

  // Data flow


}
