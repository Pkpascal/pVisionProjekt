import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { DemoMaterialModule } from 'src/app/demo-material-module';

@Component({
  selector: 'app-weather-widget',
  standalone: true,
  imports:[DemoMaterialModule, MatTabsModule],
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss']
})
export class WeatherWidgetComponent {

}
