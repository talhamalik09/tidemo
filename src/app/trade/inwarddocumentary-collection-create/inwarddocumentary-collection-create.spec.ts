import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InwarddocumentaryCollectionCreate } from './inwarddocumentary-collection-create';

describe('InwarddocumentaryCollectionCreate', () => {
  let component: InwarddocumentaryCollectionCreate;
  let fixture: ComponentFixture<InwarddocumentaryCollectionCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InwarddocumentaryCollectionCreate],
    }).compileComponents();

    fixture = TestBed.createComponent(InwarddocumentaryCollectionCreate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
