import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: any[] = [];
  showForm: boolean = false;
  employeeForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.loadEmployees();

    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      role: ['', Validators.required],
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
      const newEmployee = { ...this.employeeForm.value, id: this.employees.length + 1, selected: false };
      this.employees.push(newEmployee);
      this.employeeForm.reset();
      this.showForm = false;
      this.saveEmployees();
    }
  }

  toggleSelectAll(event: any): void {
    const isChecked = event.target.checked;
    this.employees.forEach(emp => emp.selected = isChecked);
  }

  saveEmployees(): void {
    localStorage.setItem('employees', JSON.stringify(this.employees));
  }

  loadEmployees(): void {
    const employees = localStorage.getItem('employees');
    if (employees) {
      this.employees = JSON.parse(employees);
    }
  }

  viewEmployeeDetail(): void {
    this.router.navigate(['/employee-detail']);
  }
}
