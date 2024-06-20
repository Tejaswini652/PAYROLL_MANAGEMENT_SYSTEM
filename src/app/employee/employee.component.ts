import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: any[] = [];
  showForm: boolean = false;
  employeeForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.employees = [
      { name: 'John Doe', email: 'john.doe@example.com', department: 'Development', ctc: 75000 },
      { name: 'Jane Smith', email: 'jane.smith@example.com', department: 'Marketing', ctc: 65000 },
      { name: 'Alice Johnson', email: 'alice.johnson@example.com', department: 'HR', ctc: 55000 },
      { name: 'Bob Brown', email: 'bob.brown@example.com', department: 'Sales', ctc: 70000 },
      { name: 'Charlie Davis', email: 'charlie.davis@example.com', department: 'Support', ctc: 60000 }
    ];

    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      department: ['', Validators.required],
      ctc: ['', [Validators.required, Validators.min(0)]]
    });
  }

  toggleForm(): void {
    this.showForm = !this.showForm;
  }

  onSubmit(): void {
    if (this.employeeForm.valid) {
      this.employees.push(this.employeeForm.value);
      this.employeeForm.reset();
      this.showForm = false;
    }
  }
}