import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportstandbyLcCreate } from './importstandby-lc-create';

describe('ImportstandbyLcCreate', () => {
  let component: ImportstandbyLcCreate;
  let fixture: ComponentFixture<ImportstandbyLcCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImportstandbyLcCreate],
    }).compileComponents();

    fixture = TestBed.createComponent(ImportstandbyLcCreate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
