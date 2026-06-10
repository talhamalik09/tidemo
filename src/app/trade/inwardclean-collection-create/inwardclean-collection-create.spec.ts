import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InwardcleanCollectionCreate } from './inwardclean-collection-create';

describe('InwardcleanCollectionCreate', () => {
  let component: InwardcleanCollectionCreate;
  let fixture: ComponentFixture<InwardcleanCollectionCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InwardcleanCollectionCreate],
    }).compileComponents();

    fixture = TestBed.createComponent(InwardcleanCollectionCreate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
