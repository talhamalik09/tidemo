import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorsWarnings } from './errors-warnings';

describe('ErrorsWarnings', () => {
  let component: ErrorsWarnings;
  let fixture: ComponentFixture<ErrorsWarnings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorsWarnings],
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorsWarnings);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
