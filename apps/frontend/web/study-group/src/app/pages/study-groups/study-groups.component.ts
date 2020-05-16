import { Component, OnInit, Input } from '@angular/core';
import * as models from '@study-group/studgr-models/src/models/study-group-list.model';

@Component({
  selector: 'app-study-groups',
  templateUrl: './study-groups.component.html',
  styleUrls: ['./study-groups.component.scss']
})
export class StudyGroupsComponent implements OnInit {
  @Input() studyGroups: models.IStudyGroupList[] = [];
  @Input() studentsStudyGroups: models.IStudyGroupList[] = [];

  studyGroupsTableTitle = 'Open Study Groups';
  yourStudyGroupsTableTitle = 'Your Study Groups';

  studyGroupsTableColumns: string[] = [
    'Name',
    'Time',
    'Place',
    'Week day',
    'Group commitment',
    'Periodity',
    'Status',
    'Group filled'
  ];

  constructor() {}

  ngOnInit() {}
}
