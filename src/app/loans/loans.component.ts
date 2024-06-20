import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Loan {
  employeeName: string;
  loanType: string;
  loanAmount: number;
  prerequisiteRate: number;
  disbursementDate: Date;
  reason: string;
  startDate: Date;
  instalmentAmount: number;
  amountPaid: number;
  amountPending: number;
}

interface ManagedLoan {
  loanName: string;
  prerequisiteRate: number;
}

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css']
})
export class LoansComponent implements OnInit {
  loans: Loan[] = []; // Array to hold existing loans
  managedLoans: ManagedLoan[] = []; // Array to hold managed loans
  showAddLoanModal: boolean = false; // Flag to control visibility of Add New Loan modal
  showManageLoans: boolean = false; // Flag to control visibility of Manage Loans modal
  showAddLoanTypeForm: boolean = false; // Flag to control visibility of Add Loan Type form

  loanForm: FormGroup; // Form group for Add New Loan form
  manageLoansForm: FormGroup; // Form group for Add Loan Type form

  constructor(private formBuilder: FormBuilder) {
    // Initialize form groups and form controls
    this.loanForm = this.formBuilder.group({
      employeeName: ['', Validators.required],
      loanType: ['', Validators.required],
      loanAmount: ['', [Validators.required, Validators.min(0.01)]],
      disbursementDate: ['', Validators.required],
      prerequisiteRate: ['', [Validators.required, Validators.min(0.01)]],
      reason: ['', Validators.required],
      startDate: ['', Validators.required],
      instalmentAmount: ['', [Validators.required, Validators.min(0.01)]]
    });

    this.manageLoansForm = this.formBuilder.group({
      loanName: ['', Validators.required],
      prerequisiteRate: ['', [Validators.required, Validators.min(0.01)]]
    });
  }

  ngOnInit(): void {
    // For demo purposes, initialize some sample data
    this.loans = [
      { 
        employeeName: 'John Doe', 
        loanType: 'Personal', 
        loanAmount: 5000, 
        prerequisiteRate: 5,
        disbursementDate: new Date('2023-01-15'),
        reason: 'Medical emergency',
        startDate: new Date('2023-02-01'),
        instalmentAmount: 1000,
        amountPaid: 1000,
        amountPending: 4000
      },
      { 
        employeeName: 'Jane Smith', 
        loanType: 'Home', 
        loanAmount: 10000, 
        prerequisiteRate: 10,
        disbursementDate: new Date('2023-03-10'),
        reason: 'House renovation',
        startDate: new Date('2023-04-01'),
        instalmentAmount: 1500,
        amountPaid: 3000,
        amountPending: 7000
      }
    ];

    this.managedLoans = [
      { loanName: 'Car Loan', prerequisiteRate: 5 },
      { loanName: 'Education Loan', prerequisiteRate: 3 }
    ];
  }

  // Method to submit Add New Loan form
  onSubmit(): void {
    if (this.loanForm.valid) {
      const newLoan: Loan = {
        employeeName: this.loanForm.value.employeeName,
        loanType: this.loanForm.value.loanType,
        loanAmount: this.loanForm.value.loanAmount,
        prerequisiteRate: this.loanForm.value.prerequisiteRate,
        disbursementDate: this.loanForm.value.disbursementDate,
        reason: this.loanForm.value.reason,
        startDate: this.loanForm.value.startDate,
        instalmentAmount: this.loanForm.value.instalmentAmount,
        amountPaid: 0, // Initialize with zero
        amountPending: this.loanForm.value.loanAmount // Initialize with the total loan amount
      };

      this.loans.push(newLoan);
      this.toggleAddLoanModal(); // Hide modal after submission
      this.loanForm.reset(); // Reset form fields
    }
  }

  // Method to toggle visibility of Add New Loan modal
  toggleAddLoanModal(): void {
    this.showAddLoanModal = !this.showAddLoanModal;
  }

  // Method to submit Add Loan Type form
  onManageLoansSubmit(): void {
    if (this.manageLoansForm.valid) {
      const newManagedLoan: ManagedLoan = {
        loanName: this.manageLoansForm.value.loanName,
        prerequisiteRate: this.manageLoansForm.value.prerequisiteRate
      };

      this.managedLoans.push(newManagedLoan);
      this.toggleAddLoanTypeForm(); // Hide form after submission
      this.manageLoansForm.reset(); // Reset form fields
    }
  }

  // Method to toggle visibility of Add Loan Type form
  toggleAddLoanTypeForm(): void {
    this.showAddLoanTypeForm = !this.showAddLoanTypeForm;
  }

  // Method to toggle visibility of Manage Loans modal
  toggleManageLoans(): void {
    this.showManageLoans = !this.showManageLoans;
  }
}
