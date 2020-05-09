import { async, TestBed } from '@angular/core/testing';
import { StudgrCoreModule } from './studgr-core.module';

describe('StudgrCoreModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StudgrCoreModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(StudgrCoreModule).toBeDefined();
  });
});
