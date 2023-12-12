import { Component} from "@angular/core";
import { DemoMaterialModule } from 'src/app/demo-material-module';
import { NgFor, NgIf } from '@angular/common';
import { FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  standalone: true,
  imports: [DemoMaterialModule, NgIf, NgFor,FormsModule,
    ReactiveFormsModule],
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {
    constructor() { }
    selectedFile: File | null = null;
    fileControl = new FormControl();
    onFileSelected(event: any): void {
      this.selectedFile = event.target.files[0];
    }
  
    uploadFile(): void {
      if (this.selectedFile) {
        // Implement your file upload logic here
        console.log('Uploading file:', this.selectedFile);
        // You can send the file to a server or perform other actions
      }
    }
  
}
