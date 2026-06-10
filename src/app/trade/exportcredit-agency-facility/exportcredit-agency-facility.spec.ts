import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportcreditAgencyFacility } from './exportcredit-agency-facility';

describe('ExportcreditAgencyFacility', () => {
  let component: ExportcreditAgencyFacility;
  let fixture: ComponentFixture<ExportcreditAgencyFacility>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExportcreditAgencyFacility],
    }).compileComponents();

    fixture = TestBed.createComponent(ExportcreditAgencyFacility);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
