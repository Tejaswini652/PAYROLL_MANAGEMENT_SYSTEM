import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css']
})
export class LoansComponent implements OnInit {
  loans: any[] = [];
  showForm: boolean = false;
  loanForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loanForm = this.fb.group({
      employeeName: ['', Validators.required],
      loanType: ['', Validators.required],
      loanAmount: [0, [Validators.required, Validators.min(1)]],
      amountPaid: [0, [Validators.required, Validators.min(0)]],
      amountPending: [0, [Validators.required, Validators.min(0)]],
    });
  }

  ngOnInit(): void {
    this.loans = [
      { employeeName: 'John Doe', loanType: 'Home Loan', loanAmount: 50000, amountPaid: 20000, amountPending: 30000 },
      { employeeName: 'Jane Smith', loanType: 'Car Loan', loanAmount: 30000, amountPaid: 10000, amountPending: 20000 },
      { employeeName: 'Alice Johnson', loanType: 'Personal Loan', loanAmount: 20000, amountPaid: 15000, amountPending: 5000 },
      { employeeName: 'Bob Brown', loanType: 'Education Loan', loanAmount: 40000, amountPaid: 25000, amountPending: 15000 },
    ];
  }

  toggleForm(): void {
    this.showForm = !this.showForm;
    if (!this.showForm) {
      this.resetForm();
    }
  }

  onSubmit(): void {
    if (this.loanForm.valid) {
      this.loans.push(this.loanForm.value);
      this.resetForm();
      this.showForm = false;
    }
  }

  resetForm(): void {
    this.loanForm.reset({
      employeeName: '',
      loanType: '',
      loanAmount: 0,
      amountPaid: 0,
      amountPending: 0
    });
    Object.keys(this.loanForm.controls).forEach(key => {
      this.loanForm.get(key)?.setErrors(null);
    });
  }
}
