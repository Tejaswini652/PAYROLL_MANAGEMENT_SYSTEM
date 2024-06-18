import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { Form16Component } from './form16/form16.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { OverviewComponent } from './employee/overview/overview.component';
import { SalaryDetailsComponent } from './employee/salary-details/salary-details.component';
import { InvestmentsComponent } from './employee/investments/investments.component';
import { ReimbursementsComponent } from './employee/reimbursements/reimbursements.component';
import { PayslipsFormsComponent } from './employee/payslips-forms/payslips-forms.component';
import { LoansComponent } from './employee/loans/loans.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    DashboardComponent,
    EmployeeComponent,
    Form16Component,
    EmployeeDetailComponent,
    OverviewComponent,
    SalaryDetailsComponent,
    InvestmentsComponent,
    ReimbursementsComponent,
    PayslipsFormsComponent,
    LoansComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
