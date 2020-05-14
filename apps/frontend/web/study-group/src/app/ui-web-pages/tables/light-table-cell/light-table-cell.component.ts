import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: '[app-light-table-cell]',
  templateUrl: './light-table-cell.component.html',
  styleUrls: ['./light-table-cell.component.scss']
})
export class LightTableCellComponent implements OnInit {

  @Input() cellType:
          'nameWithAvatar' |
                    'text' |
                  'status' |
             'avatarGroup' |
              'percentage' |
                 'actions';
  @Input() name: string;     // @ref 'nameWithAvatar'
  @Input() imageUrl: string; // @ref 'nameWithAvatar'
  @Input() status: string;
  @Input() avatarGroup: string[];
  @Input() percentage: string;

  constructor() { }

  ngOnInit(): void {
  }

}
