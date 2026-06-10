import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportlcIssue } from './importlc-issue';

describe('ImportlcIssue', () => {
  let component: ImportlcIssue;
  let fixture: ComponentFixture<ImportlcIssue>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImportlcIssue],
    }).compileComponents();

    fixture = TestBed.createComponent(ImportlcIssue);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
