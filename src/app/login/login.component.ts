import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit(loginForm: NgForm) {
    if (loginForm.invalid) {
      
      alert('Please fill out the form correctly.');
      return;
    }

    // Simulate login process
    console.log('Logging in with username:', this.username, 'and password:', this.password);
    

    // Navigate to the dashboard after successful login
    this.router.navigate(['/dashboard']);
  }
}
