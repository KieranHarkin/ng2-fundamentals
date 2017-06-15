import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { appRoutes } from './routes';
import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { CreateEventComponent } from './events/create-event.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventService } from './events/shared/event.service';
import { ToastrService } from './common/toastr.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { Error404Component } from './errors/404.component';
import { EventRouterActivator } from './events/event-details/event-route-activator.service';


@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
    declarations: [EventsAppComponent, EventsListComponent, 
                    EventThumbnailComponent, EventDetailsComponent, CreateEventComponent, NavBarComponent, Error404Component],
    providers: [EventService, ToastrService, EventRouterActivator],
    bootstrap: [EventsAppComponent]
})
export class AppModule {

}