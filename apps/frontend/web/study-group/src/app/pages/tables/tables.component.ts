import { Component, OnInit, Input } from '@angular/core';
import * as models from '@study-group/studgr-models/src/models/study-group-list.model';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
  @Input() studyGroups: models.IStudyGroupList[] = [];

  constructor() { }

  ngOnInit() {
  }

}
