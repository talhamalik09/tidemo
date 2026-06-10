import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportcreditagencyFacilityCreate } from './exportcreditagency-facility-create';

describe('ExportcreditagencyFacilityCreate', () => {
  let component: ExportcreditagencyFacilityCreate;
  let fixture: ComponentFixture<ExportcreditagencyFacilityCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExportcreditagencyFacilityCreate],
    }).compileComponents();

    fixture = TestBed.createComponent(ExportcreditagencyFacilityCreate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
