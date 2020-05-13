import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-light-table',
  templateUrl: './light-table.component.html',
  styleUrls: ['./light-table.component.scss']
})
export class LightTableComponent implements OnInit {

  @Input() tableTitle: string;
  @Input() tableColumns: string[];
  @Input() tableData: any;

  constructor() { }

  ngOnInit(): void {
  }

}
