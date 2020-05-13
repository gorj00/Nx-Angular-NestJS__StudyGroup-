import { Component, OnInit, Input } from '@angular/core';
import * as models from '@study-group/studgr-models/src/models/study-group-list.model';

@Component({
  selector: 'app-study-groups',
  templateUrl: './study-groups.component.html',
  styleUrls: ['./study-groups.component.scss']
})
export class StudyGroupsComponent implements OnInit {
  @Input() studyGroups: models.IStudyGroupList[] = [];

  stdyGroupsTableTitle = 'Open Study Groups';

  studyGroupsTableColumns: string[] = [
    'Study Group',
    'Periodicity',
    'Week Day',
    'Time',
    'Commitment',
    'Accepting Members'
  ];

  constructor() {}

  ngOnInit() {}
}