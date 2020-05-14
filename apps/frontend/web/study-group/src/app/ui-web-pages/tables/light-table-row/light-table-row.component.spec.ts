import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightTableRowComponent } from './light-table-row.component';

describe('LightTableRowComponent', () => {
  let component: LightTableRowComponent;
  let fixture: ComponentFixture<LightTableRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightTableRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightTableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
