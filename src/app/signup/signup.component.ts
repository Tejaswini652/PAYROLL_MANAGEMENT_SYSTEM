import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private router: Router) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      
      console.log('Form Submitted!', form.value);
      // Redirect to the dashboard
      this.router.navigate(['/dashboard']);
    } else {
      console.log('Form is invalid');
    }
  }
}
