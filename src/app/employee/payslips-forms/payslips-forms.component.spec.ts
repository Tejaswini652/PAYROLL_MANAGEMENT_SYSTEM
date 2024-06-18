import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayslipsFormsComponent } from './payslips-forms.component';

describe('PayslipsFormsComponent', () => {
  let component: PayslipsFormsComponent;
  let fixture: ComponentFixture<PayslipsFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PayslipsFormsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayslipsFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
