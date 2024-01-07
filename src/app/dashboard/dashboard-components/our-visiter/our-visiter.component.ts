import { Component, ViewChild } from "@angular/core";
import {
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexLegend,
  ApexTooltip,
  ApexNonAxisChartSeries,
  ApexResponsive,
  NgApexchartsModule,
} from "ng-apexcharts";
import { DemoMaterialModule } from "src/app/demo-material-module";

export interface VisitorChartOptions {
  series: ApexNonAxisChartSeries | any;
  chart: ApexChart | any;
  responsive: ApexResponsive[] | any;
  labels: any;
  tooltip: ApexTooltip | any;
  legend: ApexLegend | any;
  colors: string[] | any;
  stroke: any;
  dataLabels: ApexDataLabels | any;
  plotOptions: ApexPlotOptions | any;
}

@Component({
  selector: "app-our-visiter",
  standalone: true,
  imports: [NgApexchartsModule, DemoMaterialModule],
  templateUrl: "./our-visiter.component.html"
})
export class OurVisiterComponent {
  @ViewChild("visitor-chart") chart2: ChartComponent = Object.create(null);
  public VisitorChartOptions: Partial<VisitorChartOptions>;

  constructor() {
    this.VisitorChartOptions = {
      series: [25, 15, 5, 55],
      chart: {
        type: "donut",
        fontFamily: "Poppins,sans-serif",
        height: 150,
      },
      plotOptions: {
        pie: {
          donut: {
            size: "80px",
          },
        },
      },
      tooltip: {
        fillSeriesColor: false,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 0,
      },
      legend: {
        show: false,
      },
      labels: ["Leicht", "Schwerwiegend", "Kritisch", "Keine Schäden"],
      colors: ["#1e88e5", "#018655", "#C94B37", "#eceff1"],
      responsive: [
        {
          breakpoint: 767,
          options: {
            chart: {
              width: 200,
            },
          },
        },
      ],
    };
  }

  ngOnInit(): void { }
}
