import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePaymentInfoDialog} from './update-payment-info.component';

describe('UpdatePaymentInfoComponent', () => {
  let component: UpdatePaymentInfoDialog;
  let fixture: ComponentFixture<UpdatePaymentInfoDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatePaymentInfoDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePaymentInfoDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
