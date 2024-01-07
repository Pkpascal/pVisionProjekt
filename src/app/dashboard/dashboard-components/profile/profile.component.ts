import { Component, OnInit } from '@angular/core';
import { DemoMaterialModule } from 'src/app/demo-material-module';
import {MatDatepickerModule} from '@angular/material/datepicker';
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [DemoMaterialModule,MatDatepickerModule],
  templateUrl: './profile.component.html',
})
export class ProfileComponent {
  selected: Date;
  constructor() { this.selected = new Date();
  } }


