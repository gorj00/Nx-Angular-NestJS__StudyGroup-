import { BackendCommunicationService } from '../../backend-communication.service';
import { Observable } from 'rxjs';
import * as endpoints from './study-group.endpoints';
import * as models from '@study-group/studgr-models/src/models/study-group-list.model';
import { Injectable } from '@angular/core';

@Injectable()
export class StudyGroupListService {
  constructor(private api: BackendCommunicationService) {
  }

  fetchGroupList(): Observable<models.IStudyGroupListDBResponse[]> {
    return this.api.Get<models.IStudyGroupListDBResponse[]>(endpoints.studyGroups());
  }
}
