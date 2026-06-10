import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutwardcleanCollectionCreate } from './outwardclean-collection-create';

describe('OutwardcleanCollectionCreate', () => {
  let component: OutwardcleanCollectionCreate;
  let fixture: ComponentFixture<OutwardcleanCollectionCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutwardcleanCollectionCreate],
    }).compileComponents();

    fixture = TestBed.createComponent(OutwardcleanCollectionCreate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
