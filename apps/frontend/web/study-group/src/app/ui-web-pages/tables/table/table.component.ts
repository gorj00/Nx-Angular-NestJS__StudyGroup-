import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() tableDarkMode = false;
  @Input() tablePagerOn = false;
  @Input() tableTitle: string;
  @Input() tableColumns: string[];
  @Input() tableData: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
