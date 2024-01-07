import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { DemoMaterialModule } from 'src/app/demo-material-module';
import { OurVisiterComponent } from 'src/app/dashboard/dashboard-components/our-visiter/our-visiter.component';
import { SalesOverviewComponent } from 'src/app/dashboard/dashboard-components/sales-overview/sales-overview.component';
import { InsErgebnisseComponent } from 'src/app/dashboard/dashboard-components/ins-ergebnisse/ins-ergebnisse.component';
@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [DemoMaterialModule, MatButtonModule, OurVisiterComponent, SalesOverviewComponent, InsErgebnisseComponent],
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent {
  constructor() { }
}
