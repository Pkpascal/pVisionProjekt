import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { DemoMaterialModule } from 'src/app/demo-material-module';
import { ContactsComponent } from 'src/app/dashboard/dashboard-components/contacts/contacts.component';
import { FileUploadComponent } from 'src/app/dashboard/dashboard-components/file-upload/file-upload.component';
import { ProfileComponent } from 'src/app/dashboard/dashboard-components/profile/profile.component';
@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [DemoMaterialModule, MatGridListModule, NgFor,ContactsComponent,FileUploadComponent,ProfileComponent],
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent {
}
