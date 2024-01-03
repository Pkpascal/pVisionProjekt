import { CommonModule, DatePipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { DemoMaterialModule } from 'src/app/demo-material-module';


@Component({
  selector: 'app-ins-ergebnisse',
  standalone: true,
  templateUrl: './ins-ergebnisse.component.html',
  imports: [DemoMaterialModule, CommonModule, MatListModule, NgFor, MatIconModule, MatDividerModule, DatePipe],
  styleUrls: ['./ins-ergebnisse.component.scss']
})
export class InsErgebnisseComponent {
  folders: any[] = [
    {
      name: 'Bilder',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Auswertungen',
      updated: new Date('1/17/16'),
    },
  ];
  notes: any[] = [
    {
      name: 'Anlage im Schatten',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Komponente d19 beschädigt',
      updated: new Date('1/18/16'),
    },
  ];
}
