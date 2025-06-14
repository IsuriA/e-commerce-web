import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtorsFollowupComponent } from './debtors-followup.component';

describe('DebtorsFollowupComponent', () => {
  let component: DebtorsFollowupComponent;
  let fixture: ComponentFixture<DebtorsFollowupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DebtorsFollowupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebtorsFollowupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
