import { Component } from '@angular/core';

@Component({
  selector: 'app-form16',
  templateUrl: './form16.component.html',
  styleUrls: ['./form16.component.css']
})
export class Form16Component {
  file: File | null = null;
  router: any;

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.file = input.files[0];
    }
  }

  onUpload() {
    if (this.file) {
      // Handle the file upload logic here
      console.log('Uploading file:', this.file.name);
     
    } else {
      alert('Please select a file first.');
    }
  }
}
