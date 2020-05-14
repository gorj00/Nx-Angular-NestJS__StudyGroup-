import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightTableCellComponent } from './light-table-cell.component';

describe('LightTableCellComponent', () => {
  let component: LightTableCellComponent;
  let fixture: ComponentFixture<LightTableCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightTableCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightTableCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
