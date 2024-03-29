import { Component, AfterViewInit } from '@angular/core';
import { SalesOverviewComponent } from './dashboard-components/sales-overview/sales-overview.component';
import { OurVisiterComponent } from './dashboard-components/our-visiter/our-visiter.component';
import { ProfileComponent } from './dashboard-components/profile/profile.component';
import { ContactsComponent } from './dashboard-components/contacts/contacts.component';
import { ActivityTimelineComponent } from './dashboard-components/activity-timeline/activity-timeline.component';
import { FileUploadComponent } from './dashboard-components/file-upload/file-upload.component';
import { InsErgebnisseComponent } from "./dashboard-components/ins-ergebnisse/ins-ergebnisse.component";
import { WeatherWidgetComponent } from './dashboard-components/weather-widget/weather-widget.component';
@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    imports: [SalesOverviewComponent, OurVisiterComponent, ProfileComponent, ContactsComponent, ActivityTimelineComponent, FileUploadComponent, InsErgebnisseComponent,WeatherWidgetComponent]
})
export class DashboardComponent implements AfterViewInit {

	ngAfterViewInit() { }

}
