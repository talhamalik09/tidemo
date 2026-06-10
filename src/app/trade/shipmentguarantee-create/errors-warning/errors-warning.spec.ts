import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorsWarning } from './errors-warning';

describe('ErrorsWarning', () => {
  let component: ErrorsWarning;
  let fixture: ComponentFixture<ErrorsWarning>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorsWarning],
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorsWarning);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
