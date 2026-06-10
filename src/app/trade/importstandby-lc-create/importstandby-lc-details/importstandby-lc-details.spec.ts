import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportstandbyLcDetails } from './importstandby-lc-details';

describe('ImportstandbyLcDetails', () => {
  let component: ImportstandbyLcDetails;
  let fixture: ComponentFixture<ImportstandbyLcDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImportstandbyLcDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(ImportstandbyLcDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
