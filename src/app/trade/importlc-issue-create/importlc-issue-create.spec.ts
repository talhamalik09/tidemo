import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportlcIssueCreate } from './importlc-issue-create';

describe('ImportlcIssueCreate', () => {
  let component: ImportlcIssueCreate;
  let fixture: ComponentFixture<ImportlcIssueCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImportlcIssueCreate],
    }).compileComponents();

    fixture = TestBed.createComponent(ImportlcIssueCreate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
