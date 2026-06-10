import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundPage } from './fund-page';

describe('FundPage', () => {
  let component: FundPage;
  let fixture: ComponentFixture<FundPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FundPage],
    }).compileComponents();

    fixture = TestBed.createComponent(FundPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
