import { CommonModule, DatePipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { DemoMaterialModule } from 'src/app/demo-material-module';
import { InsErgebnisseComponent } from 'src/app/dashboard/dashboard-components/ins-ergebnisse/ins-ergebnisse.component';
@Component({
  selector: 'app-lists',
  standalone: true,
  imports: [DemoMaterialModule, CommonModule, MatListModule, NgFor, MatIconModule, MatDividerModule, DatePipe,InsErgebnisseComponent],
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent {
  typesOfShoes = [
    'Boots', 
    'Clogs', 
    'Loafers', 
    'Moccasins', 
    'Sneakers'];
  auftrage = [
    {
      from: 'Person1 (beispiel@1.com)',
      subject: 'Routineuntersuchung',
      content: 'Die geplante Jährliche Untersuchung'
    },
    {
      from: 'Person2 (beispiel@2.com)',
      subject: 'Leistungsabfall',
      content: 'Im letzten monat gab es einen Starken abfall bei unserer Solaranlage'
    },
    {
      from: 'Person3 (beispiel@3.com)',
      subject: 'Beschädigung',
      content: 'Ich habe vor kurzem ein Schaden an unserer Anlage bemerkt'
    },
    {
      from: 'Person1 (beispiel@1.com)',
      subject: '...Älterer Auftrag',
      content: '...'
    },
    {
      from: 'Person1 (beispiel@1.com)',
      subject: '...Älterer Auftrag',
      content: '...'
    }
  ];
}
