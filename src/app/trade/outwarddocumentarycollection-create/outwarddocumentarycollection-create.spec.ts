import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutwarddocumentarycollectionCreate } from './outwarddocumentarycollection-create';

describe('OutwarddocumentarycollectionCreate', () => {
  let component: OutwarddocumentarycollectionCreate;
  let fixture: ComponentFixture<OutwarddocumentarycollectionCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutwarddocumentarycollectionCreate],
    }).compileComponents();

    fixture = TestBed.createComponent(OutwarddocumentarycollectionCreate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
