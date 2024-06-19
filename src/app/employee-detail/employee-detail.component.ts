// import { Component, Input } from '@angular/core';

// @Component({
//   selector: 'app-employee-detail',
//   templateUrl: './employee-detail.component.html',
//   styleUrls: ['./employee-detail.component.css']
// })
// export class EmployeeDetailComponent {
//   @Input() employee: any = {
//     name: 'John Doe',
//     email: 'john.doe@example.com',
//     department: 'Engineering',
//     role: 'Software Developer',
//     ctc: 80000 // Assuming currency is in dollars
//   };

//   constructor() { }
// }
import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent {
  currentTab: string = 'Overview';

  selectTab(tab: string): void {
    this.currentTab = tab;
  }

  
}
